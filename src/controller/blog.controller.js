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
            message: 'Interval Server Error',
        });
    }
}

export async function getBlogById(req, res) {
    try {
        const data = await getBlogById(req.server.prisma, req.params.id);
        return res.status(200).send({
            statusCode: 200,
            message: 'Blogs fetched successfully',
            data: data,
        });
    } catch (error) {
        return res.status(500).send({
            statusCode: 500,
            message: 'Interval Server Error',
        });
    }
}

export async function createData(req, res) {
    try {
    } catch (error) {}
}

export async function updateData(req, res) {
    try {
    } catch (error) {}
}

export async function deleteData(req, res) {
    try {
    } catch (error) {}
}
