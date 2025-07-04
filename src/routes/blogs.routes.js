import * as blogsController from '../controller/index.js';
import {
    CreateBlogSchema,
    DeleteBlogSchema,
    GetAllBlogsSchema,
    GetByIdBlogSchema,
    UpdateBlogSchema,
} from '../schema/blogs/index.js';

export default async function blogsRoutes(fastify, opts) {
    fastify.get('', { ...GetAllBlogsSchema }, blogsController.getAllBlogs);
    fastify.get('/:id', { ...GetByIdBlogSchema }, blogsController.getBlogById);
    fastify.post('/', { ...CreateBlogSchema }, blogsController.createData);
    fastify.patch('/:id', { ...UpdateBlogSchema }, blogsController.updateData);
    fastify.delete('/:id', { ...DeleteBlogSchema }, blogsController.deleteData);
}
