import { UpdateTransactionRequest } from '../requests/updateTransationRequest';

export default class UpdateTransactionDto {
  transactionId: string;
  status: string;

  constructor(data: UpdateTransactionRequest) {
    this.transactionId = data.transactionId;
    this.status = data.status;
  }
}
