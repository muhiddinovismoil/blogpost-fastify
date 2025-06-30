export const swaggerMainConf = {
    swagger: {
        info: {
            title: 'Blog Posts API',
            description: 'Blog Post Swagger',
            version: '1.0.0',
        },
        consumes: ['application/json'],
        produces: ['application/json'],

        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
                description:
                    'Enter JWT token like this: **Bearer &lt;your-token&gt;**',
            },
        },

        security: [
            {
                bearerAuth: [],
            },
        ],
    },
};

export const swaggerExtraConf = {
    routePrefix: '/api/docs',
    uiConfig: {
        docExpansion: 'list',
        deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
};
