import CryptoJS from 'crypto-js';

const secretKey = 'we are the best of the best';

export const updateObject = <T extends object, U extends object>(
  oldObject: T,
  UpdatedValues: U
) => ({
  ...oldObject,
  ...UpdatedValues,
});

export const decodeToken = (token: string) => JSON.parse(atob(token.split('.')[1]));

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (data: any) => {
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
