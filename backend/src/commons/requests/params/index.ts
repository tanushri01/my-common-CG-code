export type AddMultistepFormParams = {
  userId: string;
};

export type GetMultistepFormParams = {
  userId: string;
};

export type GetUserDetails = {
  userId: string;
};

export type ReportParams = {
  userId: string;
  formId: string;
};

export type UpdateUserParams = {
  userId: string;
};

export type GetSingleFormParams = {
  userId: string;
  formId: string;
};

export type GetFormQuestionParams = {
  userId: string;
  formId: string;
  questionId: string;
};

export type GetTransactionHistoryParams = {
  formId: string;
};

export type GetFormForUSCourtFormParams = {
  userId: string;
};

export type GetUserFormsLimitParams = {
  userId: string;
};
