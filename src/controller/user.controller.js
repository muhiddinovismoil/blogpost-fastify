import {
    deleteUser,
    updateUser,
    getAll,
    getUserById,
} from '../service/user.service.js';

export async function getAllUsers(req, res) {
    try {
        const data = await getAll(req.server.prisma);
        return res.status(200).send({
            statusCode: 200,
            message: 'Users fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}

export async function getUserByID(req, res) {
    try {
        const data = await getUserById(req.server.prisma, req.params.id);
        return res.status(200).send({
            statusCode: 200,
            message: 'User fetched successfully',
            data,
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}

export async function createUser(req, res) {
    try {
        // const data = await
    } catch (error) {}
}

export async function updateUserById(req, res) {
    try {
        // const data = await
    } catch (error) {}
}

export async function deleteUserById(req, res) {
    try {
        // const data = await
    } catch (error) {}
}
