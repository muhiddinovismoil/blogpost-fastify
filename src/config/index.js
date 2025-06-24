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
            // default: "",
        },
    },
};

export const options = {
    confKey: "config",
    schema: schema,
};
