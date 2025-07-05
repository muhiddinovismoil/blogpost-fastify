import { HttpStatusCodes } from '../../utils/index.js';

export const UploadMediaSchema = {
    schema: {
        summary: 'Upload a file',
        tags: ['Files'],
        consumes: ['multipart/form-data'],
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: { type: 'string', default: HttpStatusCodes.OK },
                    message: { type: 'string', default: 'OK' },
                    data: {
                        type: 'object',
                        properties: {
                            url: { type: 'string' },
                            fileName: { type: 'string' },
                        },
                    },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.INTERNAL_SERVER_ERROR,
                    },
                    message: {
                        type: 'string',
                        default: 'Internal Server Error',
                    },
                },
            },
        },
    },
};
