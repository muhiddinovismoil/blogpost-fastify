import { compare, genSalt, hash } from 'bcryptjs';

export const HashPass = async (password) => {
    const salt = 10;
    return hash(password, await genSalt(salt));
};

export const VerifyPass = (oldPassword, password) => {
    return compare(password, oldPassword);
};
