import {
    createBlogs,
    deleteBlogs,
    getAll,
    getById,
    updateBlogs,
} from '../service/blogs.service.js';
import { HttpStatusCodes } from '../utils/index.js';

export async function getAllBlogs(req, res) {
    try {
        const data = await getAll(req.server.prisma);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'Blogs fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function getBlogById(req, res) {
    try {
        const data = await getById(req.server.prisma, req.params.id);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'Blogs fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function createData(req, res) {
    try {
        const payload = { ...req.body, userId: req.user.id };
        const data = await createBlogs(req.server.prisma, payload);
        return res.status(HttpStatusCodes.OK).send({
            statusCode: HttpStatusCodes.OK,
            message: 'Mew  blog created',
            data: { id: data },
        });
    } catch (error) {
        return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
            message: error.message,
        });
    }
}

export async function updateData(req, res) {
    try {
        const data = await updateBlogs(
            req.server.prisma,
            req.params.id,
            req.body
        );
        if (data == 'Blog updated successfully') {
            return res
                .status(HttpStatusCodes.OK)
                .send({ statusCode: HttpStatusCodes.OK, message: data });
        }
    } catch (error) {
        if (error.message == 'Blog not found') {
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

export async function deleteData(req, res) {
    try {
        const data = await deleteBlogs(req.server.prisma, req.params.id);
        if (data == 'User deleted successfully') {
            return res
                .status(HttpStatusCodes.OK)
                .send({ statusCode: HttpStatusCodes.OK, message: data });
        }
    } catch (error) {
        if (error.message == 'Blog not found') {
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
