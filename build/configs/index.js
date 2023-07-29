"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const env_schema_1 = require("env-schema");
const typebox_1 = require("@sinclair/typebox");
const schema = typebox_1.Type.Object({
    PORT: typebox_1.Type.Number({ default: 4000 }),
    ACCESS_TOKEN_SECRET: typebox_1.Type.String(),
    REFRESH_TOKEN_SECRET: typebox_1.Type.String(),
    MONGO_DB_URI: typebox_1.Type.String(),
    MONGO_DB_TEST_URI: typebox_1.Type.String(),
    MAIL_SERVICE_EMAIL: typebox_1.Type.String(),
    MAIL_SERVICE_PASS: typebox_1.Type.String(),
});
exports.env = (0, env_schema_1.envSchema)({
    schema,
    dotenv: true,
});
//# sourceMappingURL=index.js.map