"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paperRoute = void 0;
const paper_1 = require("../route_schemas/paper");
const paperService_1 = require("../services/paperService");
const paperRoute = (fastify, opts, done) => {
    // Create
    fastify.post("/api/paper", {
        // preHandler: verifyToken,
        schema: {
            body: paper_1.PaperCreateSchema,
            response: {
                201: paper_1.SuccessResponseSchema,
            },
        },
    }, async (req, reply) => {
        const paper = await paperService_1.PaperService.create(req.body);
        reply.status(201).send(paper);
    });
    done();
    // get single
    fastify.get("/api/paper/:id", {
        // preHandler: verifyToken,
        schema: {
            params: paper_1.PaperParamsSchema,
            response: {
                200: paper_1.GetPaperResponseSchema,
            },
        },
    }, async (req, reply) => {
        const paper = await paperService_1.PaperService.get(req.params);
        return paper;
    });
    done();
    // // Get All
    // fastify.get<{ Querystring: PaperQuerySchemaType; Reply: GetAllPaperResponseSchemaType }>(
    //   "/api/papers",
    //   {
    //     // preHandler: verifyToken,
    //     schema: {
    //       querystring: PaperQuerySchema,
    //       response: {
    //         200: GetAllPaperResponseSchema,
    //       },
    //     },
    //   },
    //   async (req, reply) => {
    //     const papers = await PaperService.getAll(req.query);
    //     return papers;
    //   }
    // );
    // done();
    // Update
    fastify.patch("/api/paper/:id", {
        // preHandler: verifyToken,
        schema: {
            params: paper_1.PaperParamsSchema,
            body: paper_1.PaperUpdateSchema,
            response: {
                200: paper_1.SuccessResponseSchema,
            },
        },
    }, async (req, reply) => {
        const response = await paperService_1.PaperService.update(req.params, req.body);
        return response;
    });
    done();
    // Delete
    fastify.delete("/api/paper/:id", {
        // preHandler: verifyToken,
        schema: {
            params: paper_1.PaperParamsSchema,
            response: {
                200: paper_1.SuccessResponseSchema,
            },
        },
    }, async (req, reply) => {
        const response = await paperService_1.PaperService.remove(req.params);
        return response;
    });
    done();
};
exports.paperRoute = paperRoute;
//# sourceMappingURL=paper.route.js.map