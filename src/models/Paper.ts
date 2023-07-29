import { prop, getModelForClass } from "@typegoose/typegoose";

export class Paper {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  content!: string;

  @prop()
  university!: string;

  @prop()
  courseyear!: string;

  @prop()
  semister!: string;

  @prop()
  askedYear!: string;

  @prop({ default: Date.now() })
  createdAt!: Date;

  @prop({ default: Date.now() })
  updatedAt!: Date;
}

export const PaperModel = getModelForClass(Paper, {
  schemaOptions: { versionKey: false },
});
