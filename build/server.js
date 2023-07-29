"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const builder_1 = require("./builder");
const configs_1 = require("./configs");
const server = (0, builder_1.buildServer)();
const main = () => {
    server.listen({ port: configs_1.env.PORT }, (error) => {
        if (!error) {
            console.log(`Server is running at port ${configs_1.env.PORT}`);
        }
        else {
            console.log("Error while running the server", error);
        }
    });
};
exports.main = main;
//# sourceMappingURL=server.js.map