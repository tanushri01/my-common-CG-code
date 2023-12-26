import { TransactionRequest } from '../requests/transactionRequest';

export default class TransactionDto {
  userId: string;
  customerId: string;
  transactionId: string;
  amount: string;
  status: string;
  formId: string;

  constructor(data: TransactionRequest) {
    this.userId = data.userId;
    this.customerId = data.customerId;
    this.transactionId = data.transactionId;
    this.amount = data.amount;
    this.status = data.status;
    this.formId = data.formId;
  }
}
