import createError, { HttpError } from "http-errors";
import { PaperModel } from "../models/Paper";
import { PaperQuerySchemaType, GetPaperResponseSchemaType, PaperParamsSchemaType, PaperUpdateSchemaType, PaperCreateSchemaType } from "../route_schemas/paper";

export class PaperRepository {
  // Create
  static create = async (data: PaperCreateSchemaType) => {
    const paper = new PaperModel(data);
    await paper.save();
    return { success: true, message: "Paper has been created." };
  };

  // Get all
  static getAll = async (query: PaperQuerySchemaType) => {
    const sort = query.sort || "";

    const university = query.university || "";
    const page = query.page || 1;
    const limit = query.limit || 5;
    const skip = (page - 1) * limit;

    const count = await PaperModel.countDocuments();
    const papers = await PaperModel.find()
      .populate({ path: "students" })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    return { count, papers };
  };

  // Get single
  static get = async (params: PaperParamsSchemaType) => {
    const paper = await PaperModel.findById(params.id).populate({ path: "students speakers" });
    if (!paper) {
      throw createError(404, "Paper not found") as HttpError;
    }
    return paper;
  };

  static update = async (params: PaperParamsSchemaType, body: PaperUpdateSchemaType) => {
    const paper = await PaperModel.findById(params.id);
    if (!paper) {
      throw createError(404, "Paper not found") as HttpError;
    }
    await PaperModel.findByIdAndUpdate(params.id, body, { new: true });
    return { success: true, message: "Paper has been updated." };
  };

  static remove = async (params: PaperParamsSchemaType) => {
    const paper = await PaperModel.findById(params.id);
    if (!paper) {
      throw createError(404, "Paper not found") as HttpError;
    }
    await PaperModel.findByIdAndDelete(params.id);
    return { success: true, message: "Paper has been deleted." };
  };
}
