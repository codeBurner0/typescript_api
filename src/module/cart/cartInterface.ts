import { Document } from "mongoose";

interface Product {
  productId: number;
  quantity: number;
}

interface cartInterface extends Document {
  userId: number;
  date: Date;
  products: Product[];
}

export { cartInterface };
