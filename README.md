# Run npm run build - this will compile index.ts into index.js which can be executed using Node.js.
# Run npm run start to run the Fastify server

{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  }
}