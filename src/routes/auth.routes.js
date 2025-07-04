import * as authController from '../controller/index.js';
import {
    RegisterSchema,
    LoginSchema,
    SendOtp,
    VerifySchema,
    ForgetPassSchema,
    ResetPassSchema,
} from '../schema/users/index.js';

export default async function authRoutes(fastify, opts) {
    fastify.post('/signup', { ...RegisterSchema }, authController.signUpUser);
    fastify.post('/signin', { ...LoginSchema }, authController.signInUser);
    fastify.post('/send-otp', { ...SendOtp }, authController.sendOtp);
    fastify.post('/verify-otp', { ...VerifySchema }, authController.verifyOtp);
    fastify.post(
        '/forget-password',
        { ...ForgetPassSchema },
        authController.forgetPassword
    );
    fastify.patch(
        '/reset-password',
        { ...ResetPassSchema },
        authController.resetPassword
    );
}
