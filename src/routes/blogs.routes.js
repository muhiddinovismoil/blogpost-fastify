import * as blogsController from '../controller/index.js';
import { authMiddleware } from '../middleware/auth.guard.js';
import {
    CreateBlogSchema,
    DeleteBlogSchema,
    GetAllBlogsSchema,
    GetByIdBlogSchema,
    UpdateBlogSchema,
} from '../schema/blogs/index.js';

export default async function blogsRoutes(fastify, opts) {
    fastify.get(
        '',
        { preHandler: [authMiddleware], ...GetAllBlogsSchema },
        blogsController.getAllBlogs
    );
    fastify.get(
        '/:id',
        {
            preHandler: [authMiddleware],
            ...GetByIdBlogSchema,
        },
        blogsController.getBlogById
    );
    fastify.post(
        '',
        { preHandler: [authMiddleware], ...CreateBlogSchema },
        blogsController.createData
    );
    fastify.patch(
        '/:id',
        { preHandler: [authMiddleware], ...UpdateBlogSchema },
        blogsController.updateData
    );
    fastify.delete(
        '/:id',
        { preHandler: [authMiddleware], ...DeleteBlogSchema },
        blogsController.deleteData
    );
}
