import * as authController from '../controller/index.js';
import { RegisterSchema, LoginSchema, SendOtp } from '../schema/users/index.js';

export default async function authRoutes(fastify, opts) {
    fastify.post('/signup', { ...RegisterSchema }, authController.signUpUser);
    fastify.post('/signin', { ...LoginSchema }, authController.signInUser);
    fastify.post('/send-otp', { ...SendOtp }, authController.sendOtp);
    fastify.post('/verify-otp', authController.verifyOtp);
    fastify.patch('/reset-password', authController.resetPassword);
    fastify.post('/forget-password', authController.forgetPassword);
}
