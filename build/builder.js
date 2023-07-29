"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
const fastify_1 = __importDefault(require("fastify"));
const mongoose_1 = __importDefault(require("mongoose"));
const configs_1 = require("./configs");
const cors_1 = __importDefault(require("@fastify/cors"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const paper_route_1 = require("./routes/paper.route");
const buildServer = () => {
    const server = (0, fastify_1.default)({ logger: false });
    server.register(multipart_1.default);
    server.register(cors_1.default, {
        origin: ["http://localhost:4000"],
    });
    mongoose_1.default
        .connect(configs_1.env.MONGO_DB_URI, {
        autoIndex: true,
    })
        .then(() => {
        console.log("MongoDb connected successfully 🚀");
    })
        .catch((error) => {
        console.log("MondoDb Disconnected ❌", error);
    });
    // server.register(userRoute, { prefix: "" });
    // server.register(authRoute, { prefix: "" });
    // server.register(jobRoute, { prefix: "" });
    // server.register(productRoute, { prefix: "" });
    server.register(paper_route_1.paperRoute, { prefix: "" });
    server.listen({ port: configs_1.env.PORT }, (error) => {
        if (!error) {
            console.log(`Server is running at port ${configs_1.env.PORT}`);
        }
        else {
            console.log("Error while running the server", error);
        }
    });
    return server;
};
exports.buildServer = buildServer;
//# sourceMappingURL=builder.js.map