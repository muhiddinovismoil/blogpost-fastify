import { HttpStatusCodes } from '../../utils/index.js';

export const UploadMediaSchema = {
    schema: {
        tags: ['Files'],
        consumes: ['multipart/form-data'],
        body: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
            required: ['file'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'integer',
                        default: HttpStatusCodes.OK,
                    },
                    message: { type: 'string' },
                    data: {
                        type: 'object',
                        properties: {
                            message: { type: 'string' },
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
                },
            },
        },
    },
};
