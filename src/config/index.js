export const schema = {
    type: "object",
    required: ["PORT", "DB_URL"],
    properties: {
        PORT: {
            type: "string",
            default: 3000,
        },
        DB_URL: {
            type: "string",
            default: "postgresql://postgres:1111@127.0.0.1:5432/postgres",
        },
    },
};

export const options = {
    confKey: "config",
    schema: schema,
};
