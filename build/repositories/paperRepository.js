"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperRepository = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const Paper_1 = require("../models/Paper");
class PaperRepository {
}
_a = PaperRepository;
// Create
PaperRepository.create = async (data) => {
    const paper = new Paper_1.PaperModel(data);
    await paper.save();
    return { success: true, message: "Paper has been created." };
};
// Get all
PaperRepository.getAll = async (query) => {
    const sort = query.sort || "";
    const university = query.university || "";
    const page = query.page || 1;
    const limit = query.limit || 5;
    const skip = (page - 1) * limit;
    const count = await Paper_1.PaperModel.countDocuments();
    const papers = await Paper_1.PaperModel.find()
        .populate({ path: "students" })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: sort == "latest" ? -1 : 1 });
    return { count, papers };
};
// Get single
PaperRepository.get = async (params) => {
    const paper = await Paper_1.PaperModel.findById(params.id).populate({ path: "students speakers" });
    if (!paper) {
        throw (0, http_errors_1.default)(404, "Paper not found");
    }
    return paper;
};
PaperRepository.update = async (params, body) => {
    const paper = await Paper_1.PaperModel.findById(params.id);
    if (!paper) {
        throw (0, http_errors_1.default)(404, "Paper not found");
    }
    await Paper_1.PaperModel.findByIdAndUpdate(params.id, body, { new: true });
    return { success: true, message: "Paper has been updated." };
};
PaperRepository.remove = async (params) => {
    const paper = await Paper_1.PaperModel.findById(params.id);
    if (!paper) {
        throw (0, http_errors_1.default)(404, "Paper not found");
    }
    await Paper_1.PaperModel.findByIdAndDelete(params.id);
    return { success: true, message: "Paper has been deleted." };
};
exports.PaperRepository = PaperRepository;
//# sourceMappingURL=paperRepository.js.map