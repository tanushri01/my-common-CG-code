import mongoose, { Schema } from 'mongoose';

export interface ITransaction extends Document {
  userId: string;
  transactionId: string;
  customerId: string;
  amount: string;
  status: string;
  formId: string;
}

const TransactionSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    transactionId: {
      type: Schema.Types.Mixed,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    formId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);
