export const UploadMediaSchema = {
    schema: {
        summary: 'Upload a file',
        tags: ['Files'],
        consumes: ['multipart/form-data'],
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: { type: 'string', default: 200 },
                    message: { type: 'string' },
                    data: {
                        type: 'object',
                        properties: {
                            url: { type: 'string' },
                            fileName: { type: 'string' },
                        },
                    },
                },
            },
        },
    },
};
