import HttpStatus, { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';
import _, { map } from 'lodash';
import moment from 'moment';
import { IMultistepForm, IUser } from '../database/user';
import AddMultistepFormDto from '../commons/dto/addMultistepFormDto';
import MultistepFormRepository from '../repositories/multistepFormRepository';
import { ExpressError } from '../commons/helper/errorHandler/ExpressError';
import constants from '../commons/constants';
import { serverConfig } from '../commons/config';
import { Transporter } from '../commons/type/transporter';
import { MessageOptions } from '../commons/type/messageOptions';
import EmailHelper from '../commons/helper/email/emailHelper';
import ViolationNoticeLetterReport from '../commons/converter/violationNoticeLetterReport';
import { GetFormForUSCourtFormParams, GetSingleFormParams, GetUserFormsLimitParams } from '../commons/requests/params';
import { GetSingleFormResponse } from '../commons/responses/getSingleFormResponse';
import { AddMultistepFormResponse } from '../commons/responses/addMultistepFormResponse';
import ReportDto from '../commons/dto/reportDto';
import { GetMultistepFormResponse } from '../commons/responses/getMultistepFormResponse';
import { FormNameEnum } from '../commons/enum/formNameEnum';
import InquiryRemovalLetterReport from '../commons/converter/inquiryRemovalLetterReport';
import BankruptcyRemovalLetterReport from '../commons/converter/bankruptcyRemovalLetterReport';
import { SendReportResponse } from '../commons/responses/report';
import ComplaintLetterReport from '../commons/converter/complaintLetterReport';
import {
  GetSingleUserFormLimitResponse,
  GetUserFormsLimitResponse,
} from '../commons/responses/getUserFormsLimitResponse';

export class MultistepFormService {
  private _multistepFormRepository: MultistepFormRepository;
  private _emailHelper: EmailHelper;

  constructor() {
    this._multistepFormRepository = new MultistepFormRepository();
    this._emailHelper = new EmailHelper();
  }

  public async addMultistepForm(data: AddMultistepFormDto): Promise<AddMultistepFormResponse> {
    let formId = data.multistepForm[0].formId;
    if (!formId) {
      formId = uuidv4();
      data.multistepForm[0].formId = formId;
    }
    const user = await this._multistepFormRepository.findByUserId(data.userId);
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    if (data.status === constants.COMPLETE) {
      await this._updateFormStatus(user, data, formId);
    }
    await this.updateFormQuestions(user, data);
    return <AddMultistepFormResponse>{ formId: formId };
  }

  private async _updateFormStatus(user: IUser, data: AddMultistepFormDto, formId: string): Promise<void> {
    let multistepForms = new Array<IMultistepForm>();
    multistepForms = user.multistepForm;
    const updatedForm = multistepForms.map((multistepForm) => {
      if (multistepForm.formId === formId) {
        return {
          ...multistepForm,
          createdAt: multistepForm.createdAt,
          status: data.status,
        };
      } else {
        return multistepForm;
      }
    });
    user.multistepForm = updatedForm;
    await this._multistepFormRepository.updateFormStatus(user);
  }

  public async getMultistepForm(userId: string): Promise<GetMultistepFormResponse> {
    const user = await this._multistepFormRepository.findByUserId(userId);
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    let uniqueForms = new Array<IMultistepForm>();
    const forms = user.multistepForm;
    const inprogressForms = _.groupBy(forms, 'formId');
    map(inprogressForms, (multistepForm) => {
      multistepForm = _.sortBy(multistepForm, 'createdAt');
      const response = multistepForm[multistepForm.length - 1];
      response.createdAt = moment(response.createdAt).format('DD-MMM-YYYY');
      uniqueForms.push(response);
    });
    uniqueForms = uniqueForms.filter((form) => form.status === 'inprogress');
    return uniqueForms;
  }

  public async createReport(reportDto: ReportDto): Promise<Buffer> {
    const user = await this._multistepFormRepository.findByUserId(reportDto.userId);
    const form = new Array<IMultistepForm>();
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    const data = user.multistepForm;
    for (let i = 0; i < data.length; i++) {
      if (data[i].formId === reportDto.formId) {
        form.push(data[i]);
      }
    }
    let pdf;
    if (form[0].formName === FormNameEnum.US_COURT_COMPLAINT_LETTERS) {
      pdf = await ComplaintLetterReport.report(form, user.email);
    } else if (form[0].formName === FormNameEnum.INQUIRY_REMOVAL_LETTERS) {
      pdf = await InquiryRemovalLetterReport.report(form);
    } else if (form[0].formName === FormNameEnum.BANKRUPTCY_REMOVAL_LETTERS) {
      pdf = await BankruptcyRemovalLetterReport.report(form);
    } else {
      pdf = await ViolationNoticeLetterReport.report(form);
    }
    return pdf;
  }

  public async sendReport(reportDto: ReportDto): Promise<SendReportResponse> {
    const user = await this._multistepFormRepository.findByUserId(reportDto.userId);
    const form = new Array<IMultistepForm>();
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    const data = user.multistepForm;
    for (let i = 0; i < data.length; i++) {
      if (data[i].formId === reportDto.formId) {
        form.push(data[i]);
      }
    }
    await this._emailHelper.ReportMail(user.email, reportDto, form[0].formName);
    return <SendReportResponse>{
      message: constants.SERVICE_MESSAGE.REPORT_SEND,
    };
  }

  public async sendReportToMail(email: string, pdf: Buffer): Promise<void> {
    const fromMailCredentials: Transporter = {
      host: serverConfig.EMAIL_HOST,
      port: serverConfig.EMAIL_PORT,
      from: serverConfig.EMAIL,
      password: serverConfig.EMAIL_PASSWORD,
    };
    try {
      const messageData: MessageOptions = {
        to: email,
        from: serverConfig.EMAIL,
        subject: constants.EMAIL_SUBJECT,
        html: constants.EMAIL_REPORT_TEXT,
        attachments: [
          {
            filename: constants.EMAIL_REPORT_CAPTION,
            content: pdf,
          },
        ],
      };
      await this._emailHelper.sendEmail(messageData, fromMailCredentials);
    } catch (error) {
      throw new ExpressError(StatusCodes.BAD_REQUEST, constants.VALIDATION_MESSAGE.ERROR_WHILE_SENDING_MAIL);
    }
  }

  public async getFormByFormId(data: GetSingleFormParams): Promise<GetSingleFormResponse> {
    const user = await this._multistepFormRepository.findByUserId(data.userId);
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    let multistepForms = user.multistepForm;
    multistepForms = multistepForms.filter((multistepForm) => multistepForm.formId === data.formId);
    return multistepForms;
  }

  public async updateFormQuestions(user: IUser, data: AddMultistepFormDto): Promise<void> {
    const form = new Array<IMultistepForm>();
    let multistepForms = user.multistepForm;
    const updatedForm = multistepForms.map((multistepForm) => {
      if (
        multistepForm.formId === data.multistepForm[0].formId &&
        multistepForm.questionId === data.multistepForm[0].questionId
      ) {
        form.push(multistepForm);
        return {
          ...multistepForm,
          createdAt: multistepForm.createdAt,
          answer: data.multistepForm[0].answer,
        };
      } else {
        return multistepForm;
      }
    });
    user.multistepForm = updatedForm;
    multistepForms = user.multistepForm;
    if (form.length === 0) {
      const filteredForm = user.multistepForm.filter(
        (multistepForm) =>
          multistepForm.formName === data.multistepForm[0].formName && multistepForm.status === 'complete'
      );
      const uniqueForm = [...new Set(filteredForm.map((form) => form.formId))];
      if (uniqueForm.length >= 3) {
        throw new ExpressError(HttpStatus.TOO_MANY_REQUESTS, constants.VALIDATION_MESSAGE.EXCEEDED_LIMIT);
      }
      await this._multistepFormRepository.addMultistepForm(data);
    } else {
      await this._multistepFormRepository.updateFormStatus(user);
    }
  }

  public async getFormForUSCourtForm(data: GetFormForUSCourtFormParams): Promise<GetSingleFormResponse> {
    const user = await this._multistepFormRepository.findByUserId(data.userId);
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    let violationForm = new Array<IMultistepForm>();
    const bankruptcyForm = new Array<IMultistepForm>();
    user?.multistepForm.filter((form) => {
      if (form.formName === FormNameEnum.VIOLATION_NOTICE_LETTERS && form.status === 'complete') {
        violationForm.push(form);
      } else if (form.formName === FormNameEnum.BANKRUPTCY_REMOVAL_LETTERS && form.status === 'complete') {
        bankruptcyForm.push(form);
      }
    });
    if (violationForm.length === 0) {
      violationForm = bankruptcyForm;
    }
    const filterForm = _.groupBy(violationForm, 'formName');
    const finalForm = map(filterForm, (multistepForm) => {
      multistepForm = _.sortBy(multistepForm, 'createdAt');
      const response = multistepForm[multistepForm.length - 1];
      return response;
    });
    violationForm = user.multistepForm.filter((multistepForm) => multistepForm.formId === finalForm[0].formId);
    return violationForm;
  }

  public async getUserFormsLimit(getUserFormsLimitParams: GetUserFormsLimitParams): Promise<GetUserFormsLimitResponse> {
    const user = await this._multistepFormRepository.findByUserId(getUserFormsLimitParams.userId);
    if (!user) {
      throw new ExpressError(HttpStatus.NOT_FOUND, constants.VALIDATION_MESSAGE.INVALID_USER_ID);
    }
    const targetArray = [] as GetSingleUserFormLimitResponse[];
    const formsInfo = new Map();
    const formId = new Array<string>();
    const inprogressForms = _.groupBy(user.multistepForm, 'formName');
    for (const key in inprogressForms) {
      let count = 0;
      inprogressForms[key].map((filterForm) => {
        if (!formId.includes(filterForm.formId) && filterForm.status === 'complete') {
          formId.push(filterForm.formId);
          count = count + 1;
          formsInfo.set(filterForm.formName, count);
        }
      });
    }
    formsInfo.forEach((value, key) => {
      const response = {} as GetSingleUserFormLimitResponse;
      response.formName = key;
      response.count = value;
      if (value >= 3) {
        targetArray.push(response);
      }
    });
    return {
      response: targetArray,
    };
  }
}
