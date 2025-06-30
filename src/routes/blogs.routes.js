import * as blogsController from '../controller/index.js';

export default async function blogsRoutes(fastify, opts) {
    fastify.get('/', blogsController.getAllBlogs);
    fastify.get('/:id', blogsController.getBlogById);
    fastify.post('/', blogsController.createBlog);
    fastify.patch('/:id', blogsController.updateBlog);
    fastify.delete('/:id', blogsController.deleteBlog);
}
