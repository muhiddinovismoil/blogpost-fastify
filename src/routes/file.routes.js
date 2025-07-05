import * as fileController from '../controller/index.js';
import { authMiddleware } from '../middleware/auth.guard.js';
import { UploadMediaSchema } from '../schema/file/index.js';

export default async function fileRoutes(fastify, opts) {
    fastify.post(
        '/upload',
        {
            preHandler: [authMiddleware],
            ...UploadMediaSchema,
        },
        fileController.fileUpload
    );
}
