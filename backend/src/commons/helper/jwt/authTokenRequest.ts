import { JwtPayload } from 'jsonwebtoken';

export type AuthTokenRequest = JwtPayload & {
  userId: string;
  email: string;
};
