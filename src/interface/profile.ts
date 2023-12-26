export interface IGetProfileResponse {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface IGetProfileRequest {
  userId: string;
}

export type IUpdateProfileResponse = {
  message: string;
};

export interface IUpdateProfileRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  newPassword?: string;
  confirmPassword?: string;
}
