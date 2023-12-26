export interface GetSingleUserFormLimitResponse {
  formName: string;
  count: number;
}

export interface GetUserFormsLimitResponse {
  response: GetSingleUserFormLimitResponse[];
}
