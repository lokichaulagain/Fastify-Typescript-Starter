"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaperService = void 0;
const paperRepository_1 = require("../repositories/paperRepository");
class PaperService {
}
_a = PaperService;
PaperService.create = (data) => {
    const response = paperRepository_1.PaperRepository.create(data);
    return response;
};
PaperService.getAll = async (query) => {
    const papers = await paperRepository_1.PaperRepository.getAll(query);
    return papers;
};
// Get single
PaperService.get = async (params) => {
    const paper = await paperRepository_1.PaperRepository.get(params);
    return paper;
};
PaperService.update = async (params, body) => {
    const response = await paperRepository_1.PaperRepository.update(params, body);
    return response;
};
PaperService.remove = async (params) => {
    const response = await paperRepository_1.PaperRepository.remove(params);
    return response;
};
exports.PaperService = PaperService;
//# sourceMappingURL=paperService.js.map