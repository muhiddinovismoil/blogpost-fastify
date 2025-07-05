export const UploadMediaSchema = {
    schema: {
        summary: 'Upload a file',
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
                description: 'Upload successful',
                type: 'object',
                properties: {
                    message: { type: 'string' },
                    url: { type: 'string' },
                },
            },
        },
    },
};
