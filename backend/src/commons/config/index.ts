import { config } from 'dotenv';
import path from 'path';
import NodeEnv from '../enum/nodeEnv';
const env = process.env;

if (env.NODE_ENV === NodeEnv.DEVELOPMENT) {
  const ENV_FILE = path.join(__dirname, '../../.env.local');
  config({ path: ENV_FILE });
}
export interface ServerConfig {
  JWT_SECRET_KEY: string;
  DB_URL: string;
  NODE_ENV: string;
  EMAIL: string;
  EMAIL_PASSWORD: string;
  EMAIL_HOST: string;
  EMAIL_PORT: string;
  URL_DOMAIN: string;
  CRYPTO_ALGORITHM: string;
  CRYPTO_SECRET_KEY: string;
  CRYPTO_IV: string;
  STRIPE_SECRET_KEY: string;
}

export const serverConfig: ServerConfig = {
  JWT_SECRET_KEY: env.JWT_SECRET_KEY!,
  DB_URL: env.DB_URL!,
  NODE_ENV: env.NODE_ENV!,
  EMAIL: env.EMAIL!,
  EMAIL_PASSWORD: env.EMAIL_PASSWORD!,
  EMAIL_HOST: env.EMAIL_HOST!,
  EMAIL_PORT: env.EMAIL_PORT!,
  URL_DOMAIN: env.URL_DOMAIN!,
  CRYPTO_ALGORITHM: env.CRYPTO_ALGORITHM!,
  CRYPTO_SECRET_KEY: env.CRYPTO_SECRET_KEY!,
  CRYPTO_IV: env.CRYPTO_IV!,
  STRIPE_SECRET_KEY: env.STRIPE_SECRET_KEY!,
};
