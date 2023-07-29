import { FastifyPluginCallback, FastifyInstance, FastifyPluginOptions, HookHandlerDoneFunction } from "fastify";
import { GetAllPaperResponseSchema, GetAllPaperResponseSchemaType, GetPaperResponseSchema, GetPaperResponseSchemaType, PaperCreateSchema, PaperCreateSchemaType, PaperParamsSchema, PaperParamsSchemaType, PaperQuerySchema, PaperQuerySchemaType, PaperUpdateSchema, PaperUpdateSchemaType, SuccessResponseSchema, SuccessResponseSchemaType } from "../route_schemas/paper";
import { PaperService } from "../services/paperService";

export const paperRoute: FastifyPluginCallback = (fastify: FastifyInstance, opts: FastifyPluginOptions, done: HookHandlerDoneFunction) => {
  // Create
  fastify.post<{ Body: PaperCreateSchemaType; Reply: SuccessResponseSchemaType }>(
    "/api/paper",
    {
      // preHandler: verifyToken,
      schema: {
        body: PaperCreateSchema,
        response: {
          201: SuccessResponseSchema,
        },
      },
    },
    async (req, reply) => {
      const paper = await PaperService.create(req.body);
      reply.status(201).send(paper);
    }
  );
  done();

  // get single
  fastify.get<{ Params: PaperParamsSchemaType; Reply: GetPaperResponseSchemaType }>(
    "/api/paper/:id",
    {
      // preHandler: verifyToken,
      schema: {
        params: PaperParamsSchema,
        response: {
          200: GetPaperResponseSchema,
        },
      },
    },
    async (req, reply) => {
      const paper = await PaperService.get(req.params);
      return paper;
    }
  );
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
  fastify.patch<{ Params: PaperParamsSchemaType; Body: PaperUpdateSchemaType; Reply: SuccessResponseSchemaType }>(
    "/api/paper/:id",
    {
      // preHandler: verifyToken,
      schema: {
        params: PaperParamsSchema,
        body: PaperUpdateSchema,
        response: {
          200: SuccessResponseSchema,
        },
      },
    },
    async (req, reply) => {
      const response = await PaperService.update(req.params, req.body);
      return response;
    }
  );
  done();

  // Delete
  fastify.delete<{ Params: PaperParamsSchemaType; Reply: SuccessResponseSchemaType }>(
    "/api/paper/:id",
    {
      // preHandler: verifyToken,
      schema: {
        params: PaperParamsSchema,
        response: {
          200: SuccessResponseSchema,
        },
      },
    },
    async (req, reply) => {
      const response = await PaperService.remove(req.params);
      return response;
    }
  );
  done();
};
