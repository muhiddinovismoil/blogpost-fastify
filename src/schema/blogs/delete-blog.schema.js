export const DeleteBlogSchema = {
    schema: {
        tags: ['Blogs'],
        response: {
            200: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: 200 },
                    message: { type: 'string', default: 'OK' },
                },
            },
            404: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: 404 },
                    message: { type: 'string', default: 'Not found' },
                },
            },
            500: {
                type: 'object',
                properties: {
                    statusCode: { type: 'integer', default: 500 },
                    message: {
                        type: 'string',
                        default: 'Interval Server Error',
                    },
                },
            },
        },
    },
};
