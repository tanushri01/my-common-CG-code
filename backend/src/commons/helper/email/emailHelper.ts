import nodemailer from 'nodemailer';
import logger from '@mindpath/logger';
import { StatusCodes } from 'http-status-codes';
import { serverConfig } from '../../config';
import { ExpressError } from '../errorHandler/ExpressError';
import { Transporter } from '../../type/transporter';
import { MessageOptions } from '../../type/messageOptions';
import constants from '../../constants';
import { forgotPasswordEmailTemplate } from '../../constants/emailTemplate/forgotPasswordMailTemplate';
import { ReportTemplate } from '../../constants/emailTemplate/reportTemplate';
import ReportDto from '../../dto/reportDto';

export default class EmailHelper {
  public async forgetPasswordMail(UserEmail: string, token: string): Promise<void> {
    try {
      const fromMailCredentials: Transporter = {
        host: serverConfig.EMAIL_HOST,
        port: serverConfig.EMAIL_PORT,
        from: serverConfig.EMAIL,
        password: serverConfig.EMAIL_PASSWORD,
      };
      await this.getTransporterOptionsForForgetPassword(fromMailCredentials, UserEmail, token);
    } catch (error) {
      logger.error(`Error in EmailHelper method forgetPasswordMail ${JSON.stringify(error)}`);
    }
  }

  public async getTransporterOptionsForForgetPassword(
    fromMailCredentials: Transporter,
    UserEmail: string,
    token: string
  ): Promise<void> {
    try {
      const MessageOptions: MessageOptions = {
        to: UserEmail,
        from: serverConfig.EMAIL,
        subject: `Password Reset`,
        html: forgotPasswordEmailTemplate(UserEmail, token),
      };
      await this.sendEmail(MessageOptions, fromMailCredentials);
    } catch (error) {
      throw new ExpressError(StatusCodes.BAD_REQUEST, constants.VALIDATION_MESSAGE.ERROR_WHILE_SENDING_MAIL);
    }
  }

  public async sendEmail(messageData: MessageOptions, fromMailCredentials: Transporter): Promise<void> {
    const transport = nodemailer.createTransport({
      host: fromMailCredentials.host,
      port: fromMailCredentials.port as unknown as number,
      auth: {
        user: fromMailCredentials.from,
        pass: fromMailCredentials.password,
      },
    });
    await transport.sendMail(messageData);
  }

  public async ReportMail(UserEmail: string, reportDto: ReportDto, formName: string): Promise<void> {
    try {
      const fromMailCredentials: Transporter = {
        host: serverConfig.EMAIL_HOST,
        port: serverConfig.EMAIL_PORT,
        from: serverConfig.EMAIL,
        password: serverConfig.EMAIL_PASSWORD,
      };
      await this.getTransporterOptionsForReport(fromMailCredentials, UserEmail, reportDto, formName);
    } catch (error) {
      logger.error(`Error in EmailHelper method ReportMail ${JSON.stringify(error)}`);
    }
  }

  public async getTransporterOptionsForReport(
    fromMailCredentials: Transporter,
    UserEmail: string,
    reportDto: ReportDto,
    formName: string
  ): Promise<void> {
    try {
      const MessageOptions: MessageOptions = {
        to: UserEmail,
        from: serverConfig.EMAIL,
        subject: `Report`,
        html: ReportTemplate(reportDto, formName),
      };
      await this.sendEmail(MessageOptions, fromMailCredentials);
    } catch (error) {
      throw new ExpressError(StatusCodes.BAD_REQUEST, constants.VALIDATION_MESSAGE.ERROR_WHILE_SENDING_MAIL);
    }
  }
}
