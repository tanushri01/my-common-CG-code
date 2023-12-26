import cryptoRandomString from 'crypto-random-string';

export function getCryptoToken(): string {
  return cryptoRandomString({ length: 20, type: 'url-safe' });
}
