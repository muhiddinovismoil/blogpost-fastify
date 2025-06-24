import Fastify from "fastify";
import fastifyEnv from "@fastify/env";
import { options } from "./src/config/index.js";

const app = Fastify({
    logger: true,
});

app.register(fastifyEnv, options).ready((err) => {
    if (err) console.error(err);
    app.listen({ port: app.config.PORT }, function (err, addr) {
        if (err) {
            app.log.error(err);
            process.exit(1);
        }
        app.log.info(`SERVER IS RUNNING ON PORT: ${app.config.PORT}`);
    });
});
