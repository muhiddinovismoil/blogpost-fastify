import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import prismaPlugin from './plugins/db.js';
import mainRoutes from './routes/index.js';
import jwtPlugin from './plugins/jwt.js';
import * as config from './config/index.js';

const app = Fastify(config.pinoConf);
await app.register(prismaPlugin);
await app.register(fastifySwagger, config.swaggerMainConf);
await app.register(fastifySwaggerUi, config.swaggerExtraConf);
await app.register(mainRoutes, { prefix: '/api/v1' });
await app.register(jwtPlugin);

export default app;
