import { UpdateUserParams } from '../requests/params';
import { UpdateUserRequest } from '../requests/updateUserRequest';

export default class UpdateUserDto {
  userId: string;
  firstName?: string;
  lastName?: string;
  email: string;
  newPassword?: string;
  confirmPassword?: string;

  constructor(data: UpdateUserRequest, params: UpdateUserParams) {
    this.userId = params.userId;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.newPassword = data.newPassword;
    this.confirmPassword = data.confirmPassword;
  }
}
