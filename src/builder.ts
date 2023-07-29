import fastify from "fastify";
import mongoose from "mongoose";
import { env } from "./configs";
import cors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import { paperRoute } from "./routes/paper.route";

export const buildServer = (): any => {
  const server = fastify({ logger: false });
  server.register(fastifyMultipart);
  server.register(cors, {
    origin: ["http://localhost:4000"],
  });

  mongoose
    .connect(env.MONGO_DB_URI, {
      autoIndex: true,
    })
    .then(() => {
      console.log("MongoDb connected successfully 🚀");
    })
    .catch((error: Error) => {
      console.log("MondoDb Disconnected ❌", error);
    });

  server.register(paperRoute, { prefix: "" });

  server.listen({ port: env.PORT }, (error) => {
    if (!error) {
      console.log(`Server is running at port ${env.PORT}`);
    } else {
      console.log("Error while running the server", error);
    }
  });
  return server;
};
