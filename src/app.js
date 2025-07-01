import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import mainRoutes from './routes/index.js';
import * as config from './config/index.js';
import prismaPlugin from './plugins/db.js';

const app = Fastify(config.pinoConf);

await app.register(import('@fastify/jwt'), {
    secret: process.env.JWT_SECRET,
});
await app.register(prismaPlugin);
await app.register(fastifySwagger, config.swaggerMainConf);
await app.register(fastifySwaggerUi, config.swaggerExtraConf);
await app.register(mainRoutes, { prefix: '/api/v1' });

export default app;
