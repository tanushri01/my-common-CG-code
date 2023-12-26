export type UpdateUserRequest = {
  firstName?: string;
  lastName?: string;
  email: string;
  newPassword?: string;
  confirmPassword?: string;
};
