export const CreateBlogSchema = {
    schema: {
        tags: ['Blogs'],
        body: {
            type: 'object',
            required: ['title', 'subTitle'],
            properties: {},
        },
    },
};
