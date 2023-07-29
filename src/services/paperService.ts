import { PaperRepository } from "../repositories/paperRepository";
import { PaperCreateSchemaType, PaperQuerySchemaType, PaperParamsSchemaType, PaperUpdateSchemaType } from "../route_schemas/paper";

export class PaperService {
  static create = (data: PaperCreateSchemaType) => {
    const response = PaperRepository.create(data);
    return response;
  };

  static getAll = async (query: PaperQuerySchemaType) => {
    const papers = await PaperRepository.getAll(query);
    return papers;
  };

  // Get single
  static get = async (params: PaperParamsSchemaType) => {
    const paper = await PaperRepository.get(params);
    return paper;
  };

  static update = async (params: PaperParamsSchemaType, body: PaperUpdateSchemaType) => {
    const response = await PaperRepository.update(params, body);
    return response;
  };

  static remove = async (params: PaperParamsSchemaType) => {
    const response = await PaperRepository.remove(params);
    return response;
  };
}
