import mongoose, { Schema, Model } from "mongoose";
import { userInterface } from "./userInterface";

interface userDocument extends userInterface {}

const userSchema: Schema<userDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel: Model<userDocument> = mongoose.model<userDocument>(
  "users",
  userSchema
);

export default UserModel;






