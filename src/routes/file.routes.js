import * as fileController from '../controller/index.js';
import { UploadMediaSchema } from '../schema/file/index.js';

export default async function fileRoutes(fastify, opts) {
    fastify.post(
        '/upload',
        { ...UploadMediaSchema },
        fileController.fileUpload
    );
}
