import { generateOTP } from '../plugins/nodemailer.js';
import {
    registerUser,
    deleteUser,
    getAll,
    getUserById,
    updateUser,
    loginUser,
    sendOtpToUser,
    verifyOTP,
    resetPass,
} from '../service/user.service.js';

export async function signUpUser(req, res) {
    try {
        const data = await registerUser(req.server.prisma, req.body);
        return res.status(200).send({
            statusCode: 200,
            message: 'User successfully created',
            data: {
                id: data.id,
            },
        });
    } catch (error) {
        if (error.message === 'User already exists') {
            return res.status(400).send({
                statusCode: 400,
                message: error.message,
            });
        }
        return res.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error',
        });
    }
}

export async function signInUser(req, res) {
    try {
        const data = await loginUser(req.server, req.body);
        return res.status(200).send({
            statusCode: 200,
            message: 'User logged in successfully',
            data: data,
        });
    } catch (error) {
        if (error.message === 'User not exists') {
            return res.status(403).send({
                statusCode: 403,
                message: 'User does not exist',
            });
        } else if (error.message === 'User email or password is wrong') {
            return res.status(400).send({
                statusCode: 400,
                message: error.message,
            });
        }
        return res
            .status(500)
            .send({ statusCode: 500, message: error.message });
    }
}

export async function sendOtp(req, res) {
    try {
        const data = await sendOtpToUser(req.server.prisma, req.body);
        if (!data) throw new Error('Something went wrong');
        res.status(200).send({
            statusCode: 200,
            message: 'OTP code successfully sended to your email',
            data: {
                id: data,
            },
        });
    } catch (error) {
        if (error.message === 'User does not exist') {
            return res.status(400).send({
                statusCode: 400,
                message: error.message,
            });
        }
        return res
            .status(500)
            .send({ statusCode: 500, message: error.message });
    }
}

export async function verifyOtp(req, res) {
    try {
        const data = await verifyOTP(req.server.prisma, req.body);
        return res.status(200).send({
            statusCode: 200,
            message: 'You are successfully verified your otp',
        });
    } catch (error) {
        if (error.message == 'User does not exist') {
            return res.status(400).send({
                statusCode: 400,
                message: 'Your email was wrong',
            });
        } else if (error.message == 'You otp was wrong') {
            return res.status(400).send({
                statusCode: 400,
                message: error.message,
            });
        }
        return res.status(500).send(error.message);
    }
}

export async function resetPassword(req, res) {
    try {
        const data = await resetPass(req.server.prisma, req.body);
        if (data)
            return res.status(200).send({
                statusCode: 200,
                message: 'You successfully resetted your password',
                data: { id: data },
            });
    } catch (error) {
        if (error.message == 'User does not exist') {
            return res
                .status(400)
                .send({ statusCode: 400, message: error.message });
        } else if (error.message == 'Your old password is not suit') {
            return res
                .status(400)
                .send({ statusCode: 400, message: error.message });
        }
        return res
            .status(500)
            .send({ statusCode: 500, message: error.message });
    }
}

export async function forgetPassword(req, res) {
    try {
    } catch (error) {
        return error.message;
    }
}

export async function getMe(req, res) {
    try {
    } catch (error) {
        return error.message;
    }
}
