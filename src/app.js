import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyStatic from '@fastify/static';
import mainRoutes from './routes/index.js';
import * as config from './config/index.js';
import prismaPlugin from './plugins/db.js';
import path from 'path';
import fastifyMultipart from '@fastify/multipart';
import fs from 'fs';

const app = Fastify(config.pinoConf);

await app.register(import('@fastify/jwt'), {
    secret: process.env.JWT_SECRET || 'HELLO WORLD',
});
await app.register(fastifyMultipart);
const uploadDir = path.join(process.cwd(), 'upload');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

await app.register(fastifyStatic, {
    root: uploadDir,
    prefix: '/uploads/',
});
await app.register(prismaPlugin);
await app.register(fastifySwagger, config.swaggerMainConf);
await app.register(fastifySwaggerUi, config.swaggerExtraConf);
await app.register(mainRoutes, { prefix: '/api/v1' });

export default app;
