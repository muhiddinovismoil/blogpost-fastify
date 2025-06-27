import app from "./src/app.js";
import fastifyEnv from "@fastify/env";
import { options } from "./src/config/index.js";

await app.register(fastifyEnv, options);

app.listen({ port: app.config.PORT }, function (err, addr) {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`SWAGGER IS ON: http://127.0.0.1:${app.config.PORT}/api/docs`);
});
