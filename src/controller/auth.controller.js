import { generateOTP } from '../plugins/nodemailer.js';
import {
    registerUser,
    deleteUser,
    getAll,
    getUserById,
    updateUser,
    loginUser,
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
        const otp = generateOTP();
    } catch (error) {
        return error.message;
    }
}

export async function verifyOtp(req, res) {
    try {
    } catch (error) {
        return error.message;
    }
}

export async function resetPassword(req, res) {
    try {
    } catch (error) {
        return error.message;
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
