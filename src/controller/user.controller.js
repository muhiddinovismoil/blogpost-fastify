import {
    deleteUser,
    updateUser,
    getAll,
    getUserById,
} from '../service/user.service.js';
import { HttpStatusCodes } from '../utils/index.js';

export async function getAllUsers(req, res) {
    try {
        const data = await getAll(req.server.prisma);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'Users fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function getUserByID(req, res) {
    try {
        const data = await getUserById(req.server.prisma, req.params.id);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'User fetched successfully',
            data,
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function updateUserById(req, res) {
    try {
        const data = await updateUser(
            req.server.prisma,
            req.params.id,
            req.body
        );
        if (data == 'User successfully updated') {
            return res
                .status(HttpStatusCodes.OK)
                .send({ statusCode: HttpStatusCodes.OK, message: data });
        }
    } catch (error) {
        if (error.message == 'User not found') {
            return res.status(HttpStatusCodes.NOT_FOUND).send({
                statusCode: HttpStatusCodes.NOT_FOUND,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function deleteUserById(req, res) {
    try {
        const data = await deleteUser(req.server.prisma, req.params.id);
        if (data == 'User successfully deleted') {
            return res
                .status(HttpStatusCodes.OK)
                .send({ statusCode: HttpStatusCodes.OK, message: data });
        }
    } catch (error) {
        if (error.message == 'User not found') {
            return res.status(HttpStatusCodes.NOT_FOUND).send({
                statusCode: HttpStatusCodes.NOT_FOUND,
                message: error.message,
            });
        }
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function getMe(req, res) {
    try {
        const user = await getUserById(req.server.prisma, req.user.id);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'Your profile data fetched',
            data: user,
        });
    } catch (error) {
        return res
            .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
                message: error.message,
            });
    }
}
