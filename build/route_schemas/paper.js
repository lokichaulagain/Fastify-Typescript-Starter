"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPaperResponseSchema = exports.PaperQuerySchema = exports.PaperParamsSchema = exports.GetPaperResponseSchema = exports.PaperUpdateSchema = exports.SuccessResponseSchema = exports.PaperCreateSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
// Create
exports.PaperCreateSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    content: typebox_1.Type.String(),
    university: typebox_1.Type.String(),
    courseyear: typebox_1.Type.String(),
    semister: typebox_1.Type.String(),
    askedYear: typebox_1.Type.String(),
});
// Success  Response
exports.SuccessResponseSchema = typebox_1.Type.Object({
    success: typebox_1.Type.Boolean(),
    message: typebox_1.Type.String(),
});
// Update
exports.PaperUpdateSchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    content: typebox_1.Type.String(),
    university: typebox_1.Type.String(),
    courseyear: typebox_1.Type.String(),
    semister: typebox_1.Type.String(),
    askedYear: typebox_1.Type.String(),
});
// Response
exports.GetPaperResponseSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Any(),
    title: typebox_1.Type.String(),
    content: typebox_1.Type.String(),
    university: typebox_1.Type.String(),
    courseyear: typebox_1.Type.String(),
    semister: typebox_1.Type.String(),
    askedYear: typebox_1.Type.String(),
    createdAt: typebox_1.Type.Any(),
    updatedAt: typebox_1.Type.Any(),
});
// Get
exports.PaperParamsSchema = typebox_1.Type.Object({
    id: typebox_1.Type.String(),
});
exports.PaperQuerySchema = typebox_1.Type.Object({
    id: typebox_1.Type.Optional(typebox_1.Type.String()),
    limit: typebox_1.Type.Optional(typebox_1.Type.Number()),
    page: typebox_1.Type.Optional(typebox_1.Type.Number()),
    university: typebox_1.Type.Optional(typebox_1.Type.String()),
    courseYear: typebox_1.Type.Optional(typebox_1.Type.String()),
    semister: typebox_1.Type.Optional(typebox_1.Type.String()),
    sort: typebox_1.Type.Optional(typebox_1.Type.String()),
});
//Get All
exports.GetAllPaperResponseSchema = typebox_1.Type.Object({
    count: typebox_1.Type.Number(),
    events: typebox_1.Type.Array(exports.GetPaperResponseSchema),
});
//# sourceMappingURL=paper.js.map