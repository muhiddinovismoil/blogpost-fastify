export const pinoConf = {
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'yyyy-mm-dd HH:MM:ss',
                ignore: 'pid,hostname',
                singleLine: false,
                levelFirst: true,
                messageFormat: '{req.method} {req.url} | {msg}',
                level: 'info',
            },
        },
        serializers: {
            req(request) {
                const url = request.url;
                if (
                    url.startsWith('/api/docs/static') ||
                    url === '/api/docs' ||
                    url === '/api/docs/json' ||
                    url === '/api/docs/swagger-initializer.js'
                ) {
                    return undefined;
                }
                return {
                    method: request.method,
                    url: request.url,
                };
            },
        },
    },
};
