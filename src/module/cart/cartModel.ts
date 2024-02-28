import mongoose, { Schema, Model } from "mongoose";
import { cartInterface } from "./cartInterface";

interface cartDocument extends cartInterface {}

const productSchema: Schema = new Schema({
  productId: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const cartSchema: Schema<cartDocument> = new Schema({
  userId: { type: Number, required: true },
  date: { type: Date, required: true, unique: true },
  products: { type: [productSchema], required: true },
});

const UserModel: Model<cartDocument> = mongoose.model<cartDocument>(
  "cart",
  cartSchema
);

export default UserModel;
