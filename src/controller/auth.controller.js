import {
    registerUser,
    loginUser,
    sendOtpToUser,
    verifyOTP,
    resetPass,
    forgetPass,
} from '../service/user.service.js';
import { HttpStatusCodes } from '../utils/index.js';

export async function signUpUser(req, res) {
    try {
        const data = await registerUser(req.server.prisma, req.body);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'User successfully created',
            data: {
                id: data.id,
            },
        });
    } catch (error) {
        if (error.message === 'User already exists') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function signInUser(req, res) {
    try {
        const data = await loginUser(req.server, req.body);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'User logged in successfully',
            data: data,
        });
    } catch (error) {
        if (error.message === 'User not exists') {
            return res.status(HttpStatusCodes.FORBIDDEN).send({
                statusCode: HttpStatusCodes.FORBIDDEN,
                message: 'User does not exist',
            });
        } else if (error.message === 'User email or password is wrong') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function sendOtp(req, res) {
    try {
        const data = await sendOtpToUser(req.server.prisma, req.body);
        if (!data) throw new Error('Something went wrong');
        res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'OTP code successfully sended to your email',
            data: {
                id: data,
            },
        });
    } catch (error) {
        if (error.message === 'User does not exist') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function verifyOtp(req, res) {
    try {
        const data = await verifyOTP(req.server.prisma, req.body);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'You are successfully verified your otp',
        });
    } catch (error) {
        if (error.message == 'User does not exist') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: 'Your email was wrong',
            });
        } else if (error.message == 'You otp was wrong') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function resetPassword(req, res) {
    try {
        const data = await resetPass(req.server.prisma, req.body);
        if (data)
            return res.status(HttpStatusCodes.OK).send({
                statusCode: HttpStatusCodes.OK,
                message: 'You successfully resetted your password',
                data: { id: data },
            });
    } catch (error) {
        if (error.message == 'User does not exist') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        } else if (error.message == 'Your old password is not suit') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function forgetPassword(req, res) {
    try {
        const data = await forgetPass(req.server.prisma, req.body);
        if (data == 'You are setted new password successfully')
            return res
                .status(HttpStatusCodes.OK)
                .send({ statusCode: HttpStatusCodes.OK, message: data });
    } catch (error) {
        if (error.message == 'User does not exist') {
            return res.status(HttpStatusCodes.BAD_REQUEST).send({
                statusCode: HttpStatusCodes.BAD_REQUEST,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}
