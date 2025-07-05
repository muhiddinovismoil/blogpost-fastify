import {
    createBlogs,
    deleteBlogs,
    getAll,
    getById,
    updateBlogs,
} from '../service/blogs.service.js';

export async function getAllBlogs(req, res) {
    try {
        const data = await getAll(req.server.prisma);
        return res.status(200).send({
            statusCode: 200,
            message: 'Blogs fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}

export async function getBlogById(req, res) {
    try {
        const data = await getById(req.server.prisma, req.params.id);
        return res.status(200).send({
            statusCode: 200,
            message: 'Blogs fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}

export async function createData(req, res) {
    try {
        const payload = { ...req.body, userId: req.user.id };
        const data = await createBlogs(req.server.prisma, payload);
        return res.status(200).send({
            statusCode: 200,
            message: 'Mew  blog created',
            data: { id: data },
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
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
            return res.status(200).send({ statusCode: 200, message: data });
        }
    } catch (error) {
        if (error.message == 'Blog not found') {
            return res
                .status(404)
                .send({ statusCode: 404, message: error.message });
        }
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}

export async function deleteData(req, res) {
    try {
        const data = await deleteBlogs(req.server.prisma, req.params.id);
        if (data == 'User deleted successfully') {
            return res.status(200).send({ statusCode: 200, message: data });
        }
    } catch (error) {
        if (error.message == 'Blog not found') {
            return res
                .status(404)
                .send({ statusCode: 404, message: error.message });
        }
        return res.status(500).send({
            statusCode: 500,
            message: error.message,
        });
    }
}
