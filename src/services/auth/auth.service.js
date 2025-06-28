import { PrismaClient } from '@prisma/client';
import { HashPass, VerifyPass } from '../../utils/index.js';

/**
 * @typedef {import('@prisma/client').PrismaClient} PrismaClient
 */

export class AuthService {
  /**
   * @param {PrismaClient} prisma
   */
  constructor(prisma) {
    this.prisma = prisma;
  }

  async signup(payload) {
    try {
      const password = HashPass(payload?.password);
      const data = await this.findWithEmail(payload.email);
      if (data == 'User not found') {
        const newUser = await this.prisma.users.create({
          data: {
            ...payload,
            password,
          },
        });
        return {
          statusCode: 201,
          message: 'User signed up successfully',
          data: {
            id: newUser.id,
          },
        };
      }
      return {
        statusCode: 400,
        message: 'User with this email already exists',
      };
    } catch (error) {
      return error.message;
    }
  }
  async signin(payload) {
    try {
      const data = await this.findWithEmail(payload.email);
      if (data == 'User not found')
        throw new Error('User email or password wrong');
      const bool = VerifyPass(data.password, payload.password);
      if (bool) {
        return {
          statusCode: 200,
          message: 'User signed in successfully',
        };
      }
    } catch (error) {
      return error.message;
    }
  }
  async findWithEmail(email) {
    try {
      const data = await this.prisma.users.findFirst({
        where: {
          email,
        },
      });
      if (data) {
        return data;
      } else {
        return 'User not found';
      }
    } catch (err) {
      return err.message;
    }
  }
}
