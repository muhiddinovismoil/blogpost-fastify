export const UploadMediaSchema = {
    schema: {
        summary: 'Upload a file',
        consumes: ['multipart/form-data'],
        produces: ['application/json'],
        tags: ['Files'],
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
                description: 'File uploaded successfully',
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    fileName: { type: 'string' },
                    url: { type: 'string' },
                },
            },
        },
    },
};
