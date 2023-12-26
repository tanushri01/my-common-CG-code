export type AddMultistepFormRequest = {
  formdata: Array<MultistepFormRequest>;
};

export type MultistepFormRequest = {
  formId: string;
  questionId: number;
  question: string;
  answer: unknown;
  status: string;
  formName: string;
  activeStep: number;
  subActiveStep: number;
  createdAt?: Date;
};
