export const CreateBlogSchema = {
    schema: {
        tags: ['Blogs'],
        body: {
            type: 'object',
            required: ['title', 'subTitle', 'content'],
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
                    data: {
                        id: { type: 'string' },
                    },
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
