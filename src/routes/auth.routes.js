import * as authController from '../controller/index.js';
import { RegisterSchema, LoginSchema } from '../schema/users/index.js';

export default async function authRoutes(fastify, opts) {
    fastify.post('/signup', { ...RegisterSchema }, authController.signUpUser);
    fastify.post('/signin', { ...LoginSchema }, authController.signInUser);
    fastify.patch('/reset-password', authController.resetPassword);
    fastify.post('/send-otp', authController.sendOtp);
    fastify.post('/forget-password', authController.forgetPassword);
}
