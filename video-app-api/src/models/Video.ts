import { InferSchemaType, model, Schema } from "mongoose";

const VideoSchema = new Schema({
  videoId: {
    type: String,
    require: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String,
    require: true,
  },
});

type Video = InferSchemaType<typeof VideoSchema>;

export default model<Video>("Video", VideoSchema);
