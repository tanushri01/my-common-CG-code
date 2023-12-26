export interface IMultistepFormResponse {
  question: string;
  answer: unknown;
  status: string;
  formName: string;
  questionId: number;
  activeStep: number;
  subActiveStep: number;
  formId?: string;
  createdAt?: string;
}

export interface IMultistepFormRequest {
  userId: string;
}

export interface IAddMultistepFormRequest {
  formdata: IMultistepFormResponse[];
}

export interface IAddMultistepFormResponse {
  formId: string;
}

export interface IFetchMultistepFormRequest extends IAddMultistepFormResponse {}

export interface IValidate {
  isValid: boolean;
  isFinal: boolean;
  formsData?: IAddMultistepFormRequest;
}

export interface IStepRef {
  validate: () => IValidate;
}

export interface ISubStepRef {
  validate: () => boolean;
  formsData?: IAddMultistepFormRequest;
}

export interface IGetFormLimitResponse {
  formName: string;
  count: number;
}

export interface IGetUserFormsLimitResponse {
  response: IGetFormLimitResponse[];
}
