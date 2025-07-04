import { HashPass, VerifyPass } from '../utils/index.js';
import app from '../app.js';
import { generateOTP, sendEmail } from '../plugins/nodemailer.js';

async function getUserByEmail(email, prisma) {
    try {
        const data = await prisma.users.findFirst({ where: { email } });
        if (!data) throw new Error('User not found');
        return data;
    } catch (error) {
        return error.message;
    }
}

export async function registerUser(prisma, payload) {
    try {
        const { fullname, password, ...rest } = payload;
        const data = await getUserByEmail(payload.email, prisma);
        if (data != 'User not found' && data)
            throw new Error('User already exists');
        const newUser = await prisma.users.create({
            data: {
                ...rest,
                fullName: fullname,
                password: await HashPass(payload.password),
            },
        });
        return { id: newUser.id };
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function loginUser(server, payload) {
    try {
        const data = await getUserByEmail(payload.email, server.prisma);
        if (data == 'User not found') throw new Error('User not exists');
        const isChecked = await VerifyPass(data.password, payload.password);
        if (!isChecked) throw new Error('User email or password is wrong');
        const accessToken = app.jwt.sign(
            {
                id: data.id,
                fullName: data.fullName,
            },
            { expiresIn: process.env.JWT_SECRET_TIME }
        );
        return {
            accessToken,
            expiresIn: process.env.JWT_SECRET_TIME,
        };
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function sendOtpToUser(prisma, payload) {
    try {
        const otp = generateOTP();
        const data = await getUserByEmail(payload.email, prisma);
        if (data == 'User not found') throw new Error('User does not exist');
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        await prisma.otp.create({
            data: { code: otp, expiresAt, userId: data.id },
        });
        await sendEmail({ to: payload.email, otp });
        return data.id;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function resetPass(prisma, payload) {
    try {
        const data = await getUserByEmail(payload.email, prisma);
        if (data == 'User not found') throw new Error('User does not exist');
        const isChecked = await VerifyPass(data.password, payload.oldPassword);
        if (isChecked) {
            const password = await HashPass(payload.newPassword);
            const { id } = await prisma.users.update({
                where: { email: payload.email },
                data: { password: password },
            });
            return id;
        } else {
            throw new Error('Your old password is not suit');
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

export async function forgetPass(prisma, payload) {
    try {
        const data = await getUserByEmail(payload.email, prisma);
        if (data == 'User not found') throw new Error('User does not exist');
        const hashedPass = await HashPass(payload.password);
        await prisma.users.update({
            where: { email: payload.email },
            data: { password: hashedPass },
        });
        return 'You are setted new password successfully';
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function verifyOTP(prisma, payload) {
    try {
        const data = await getUserByEmail(payload.email, prisma);
        if (data == 'User not found') throw new Error('User does not exist');
        const otpExists = await prisma.otp.findFirst({
            where: { code: payload.otp },
        });
        if (!otpExists) throw new Error('You otp was wrong');
        await prisma.otp.delete({
            where: { code: payload.otp },
        });
        return;
    } catch (error) {
        throw new Error(error.message);
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//********************************************************************************************************************************************************************************/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//! &&&&&&&&&&& USER SERVICE
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
//********************************************************************************************************************************************************************************/
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/

export async function getAll(prisma) {
    try {
        const data = await prisma.users.findMany({
            select: {
                id: true,
                fullName: true,
                email: true,
                photo: true,
            },
        });
        return data.length == 0 ? [] : data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUserById(prisma, id) {
    try {
        const data = await prisma.users.findFirst({
            where: { id },
            select: {
                id: true,
                fullName: true,
                email: true,
                photo: true,
            },
        });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function updateUser(prisma, id, payload) {
    try {
        const data = await getUserById(prisma, id);
        if (!data) throw new Error('User not found');
        await prisma.users.update({
            where: { id },
            data: { ...payload, password: data?.password },
        });
        return 'User successfully updated';
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function deleteUser(prisma, id) {
    try {
        const data = await getUserById(prisma, id);
        if (!data) throw new Error('User not found');
        await prisma.users.delete({ where: { id } });
        return 'User successfully deleted';
    } catch (error) {
        throw new Error(error.message);
    }
}
