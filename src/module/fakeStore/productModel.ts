import mongoose, { Schema, Model } from "mongoose";
import { FakeStoreInterface } from "./productInterface";

interface FakeStoreDocument extends FakeStoreInterface {}

const FakeStoreSchema: Schema<FakeStoreDocument> = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

const UserModel: Model<FakeStoreDocument> = mongoose.model<FakeStoreDocument>(
  "FakeStore",
  FakeStoreSchema
);

export default UserModel;
