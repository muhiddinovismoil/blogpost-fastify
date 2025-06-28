import { compare, genSalt, hash } from 'bcryptjs';

export const HashPass = (password) => {
  return hash(password, genSalt(10));
};

export const VerifyPass = (oldPassword, password) => {
  return compare(password, oldPassword);
};
