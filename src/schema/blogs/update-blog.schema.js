export const UpdateBlogSchema = {
    schema: {
        tags: ['Blogs'],
        body: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subTitle: { type: 'string' },
                media: { type: 'string' },
                content: { type: 'string' },
            },
        },
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
                    message: { type: 'string', default: 'Not Found' },
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
