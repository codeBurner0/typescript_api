import mongoose, { Schema, Model } from "mongoose";
import { cartInterface, Date } from "./cartInterface";

interface cartDocument extends cartInterface, Date {}

const productSchema: Schema = new Schema({
  productId: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const cartSchema: Schema<cartDocument> = new Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true, unique: true },
  products: { type: [productSchema], required: true },
});

const UserModel: Model<cartDocument> = mongoose.model<cartDocument>(
  "cart",
  cartSchema
);

export default UserModel;
