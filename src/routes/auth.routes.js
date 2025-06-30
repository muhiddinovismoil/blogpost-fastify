import * as authController from '../controller/index.js';

export default async function authRoutes(fastify, opts) {
  fastify.post('/signup', authController.registerUser);
  fastify.post('/signin', authController.loginUser);
  fastify.patch('/reset-password', authController.resetPassword);
  fastify.post('/send-otp', authController.sendOtp);
  fastify.post('/forget-password', authController.forgetPassword);
}
