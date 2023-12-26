import mongoose, { Schema } from 'mongoose';
import { LoginTypeEnum } from '../commons/enum/loginType';

export interface IUser extends Document {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  resetPasswordToken: string;
  multistepForm: Array<IMultistepForm>;
  customerId: string;
  createdAt: Date;
  loginType: LoginTypeEnum;
}

export interface IMultistepForm extends Document {
  formId: string;
  question: string;
  answer: unknown;
  status: string;
  formName: string;
  questionId: number;
  activeStep: number;
  subActiveStep: number;
  createdAt: string;
}

const MultistepForm: Schema = new Schema({
  formId: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: Schema.Types.Mixed,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  formName: {
    type: String,
    required: true,
  },
  questionId: {
    type: Number,
    required: true,
  },
  activeStep: {
    type: Number,
    required: true,
  },
  subActiveStep: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

//TODO priti 30/08/2023 if user is login by google then password field is not required
const UserSchema: Schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    customerId: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    multistepForm: [MultistepForm],
    loginType: {
      type: String,
      enum: LoginTypeEnum,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>('User', UserSchema);
