import { Document } from "mongoose";

interface Product {
  productId: number;
  quantity: number;
}

interface Date {
  date: Date;
}

interface cartInterface extends Document {
  userId: string;
  products: Product[];
}

type ICart = {
  userId: string | undefined;
  products: Product[];
};

export { cartInterface, ICart,Date };
