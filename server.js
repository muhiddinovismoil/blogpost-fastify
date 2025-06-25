import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import { options } from "./src/config/index.js";

const app = Fastify({
    logger: true,
});

await app.register(fastifyEnv, options);

app.listen({ port: app.config.PORT }, function (err, addr) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`SERVER IS RUNNING ON PORT: ${app.config.PORT}`);
});
