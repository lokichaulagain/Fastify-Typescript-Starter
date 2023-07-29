import { Static, Type } from "@sinclair/typebox";

// Create
export const PaperCreateSchema = Type.Object({
  title: Type.String(),
  content: Type.String(),
  university: Type.String(),
  courseyear: Type.String(),
  semister: Type.String(),
  askedYear: Type.String(),
});
export type PaperCreateSchemaType = Static<typeof PaperCreateSchema>;

// Success  Response
export const SuccessResponseSchema = Type.Object({
  success: Type.Boolean(),
  message: Type.String(),
});
export type SuccessResponseSchemaType = Static<typeof SuccessResponseSchema>;

// Update
export const PaperUpdateSchema = Type.Object({
  title: Type.String(),
  content: Type.String(),
  university: Type.String(),
  courseyear: Type.String(),
  semister: Type.String(),
  askedYear: Type.String(),
});
export type PaperUpdateSchemaType = Static<typeof PaperUpdateSchema>;

// Response
export const GetPaperResponseSchema = Type.Object({
  _id: Type.Any(),
  title: Type.String(),
  content: Type.String(),
  university: Type.String(),
  courseyear: Type.String(),
  semister: Type.String(),
  askedYear: Type.String(),
  createdAt: Type.Any(),
  updatedAt: Type.Any(),
});
export type GetPaperResponseSchemaType = Static<typeof GetPaperResponseSchema>;

// Get
export const PaperParamsSchema = Type.Object({
  id: Type.String(),
});
export type PaperParamsSchemaType = Static<typeof PaperParamsSchema>;

export const PaperQuerySchema = Type.Object({
  id: Type.Optional(Type.String()),
  limit: Type.Optional(Type.Number()),
  page: Type.Optional(Type.Number()),
  university: Type.Optional(Type.String()),
  courseYear: Type.Optional(Type.String()),
  semister: Type.Optional(Type.String()),
  sort: Type.Optional(Type.String()),
});
export type PaperQuerySchemaType = Static<typeof PaperQuerySchema>;

//Get All
export const GetAllPaperResponseSchema = Type.Object({
  count: Type.Number(),
  events: Type.Array(GetPaperResponseSchema),
});
export type GetAllPaperResponseSchemaType = Static<typeof GetAllPaperResponseSchema>;

// Delete
export type PaperDeleteResponseType = Static<typeof GetPaperResponseSchema>;
