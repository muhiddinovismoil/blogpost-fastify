import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import * as config from "./config/index.js";

const app = Fastify(config.pinoConf);
app.register(fastifySwagger, config.swaggerMainConf);
app.register(fastifySwaggerUi, config.swaggerExtraConf);

export default app;
