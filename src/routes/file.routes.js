import * as fileController from '../controller/index.js';

export default async function fileRoutes(fastify, opts) {
  fastify.post('/upload', fileController.fileUpload);
}
