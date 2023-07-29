

import { buildServer } from "./builder";
import { env } from "./configs";

const server = buildServer();

export const main = (): any => {
  server.listen({ port: env.PORT }, (error: any) => {
    if (!error) {
      console.log(`Server is running at port ${env.PORT}`);
    } else {
      console.log("Error while running the server", error);
    }
  });
};
