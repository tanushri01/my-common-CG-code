import { ReportParams } from '../requests/params';

export default class ReportDto {
  userId: string;
  formId: string;

  constructor(params: ReportParams) {
    this.userId = params.userId;
    this.formId = params.formId;
  }
}
