import { InferSchemaType, model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
});

type User = InferSchemaType<typeof UserSchema>;

export default model<User>("User", UserSchema);
