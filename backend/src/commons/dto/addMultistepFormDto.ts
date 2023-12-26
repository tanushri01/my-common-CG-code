import { AddMultistepFormRequest, MultistepFormRequest } from '../requests/addMultistepFormRequest';
import { AddMultistepFormParams } from '../requests/params';

export default class AddMultistepFormDto {
  userId: string;
  multistepForm: Array<MultistepFormRequest>;
  status: string;

  constructor(body: AddMultistepFormRequest, params: AddMultistepFormParams) {
    this.multistepForm = body.formdata;
    this.userId = params.userId;
    this.status = body.formdata[0].status;
    this.multistepForm[0].createdAt = new Date();
  }
}
