import { envSchema } from "env-schema";
import { Static, Type } from "@sinclair/typebox";

const schema = Type.Object({
  PORT: Type.Number({ default: 4000 }),
  ACCESS_TOKEN_SECRET: Type.String(),
  REFRESH_TOKEN_SECRET:Type.String(),
  MONGO_DB_URI: Type.String(),
  MONGO_DB_TEST_URI: Type.String(),
  MAIL_SERVICE_EMAIL: Type.String(),
  MAIL_SERVICE_PASS:Type.String(),
});
type SchemaType = Static<typeof schema>;

export const env = envSchema<SchemaType>({
  schema,
  dotenv: true,
});

