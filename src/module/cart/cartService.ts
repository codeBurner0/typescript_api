import { cartInterface } from "./cartInterface";
import Cart from "./cartModel";

// ADD CART ITEM SERVICE
const addCartService = async (
  body: cartInterface,
  userId: string
): Promise<cartInterface> => {
  const cart: cartInterface = new Cart({
    userId: userId,
    date: Date().toString(),
    products: body.products,
    body: body.products,
  });
  console.log(body);
  return cart.save();
};

// GET ALL CARTS SERVICE
const getAllCartService = async (): Promise<cartInterface[] | null> => {
  return Cart.find({});
};

// GET SINGLE CART SERVICE
const getCartService = async (id: string): Promise<cartInterface | null> => {
  return Cart.findOne({ _id: id });
};

// LIMIT CART API
const limitCartResultService = async (limit: number) => {
  return Cart.find().limit(limit);
};

// GET USER CARTS SERVICE
const getUserCartsService = async (
  userId: string
): Promise<cartInterface[] | null> => {
  console.log(userId);
  return Cart.find({ userId: userId });
};

// SORT CARTS BY ID SERVICE
const sortCartService = async (sortVal: string) => {
  try {
    const sortOrder = sortVal === "asc" ? 1 : -1;
    return Cart.find().select({ date: 1 }).sort({ date: sortOrder }).exec();
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// UPDATE CART  SERVICE
const updateCartService = (id: string, body: cartInterface) => {
  return Cart.updateOne({ _id: id }, { $set: body });
};

// DELETE CART SERVICE
const deleteCartService = (id: string) => {
  return Cart.findByIdAndDelete(id);
};

// DELETE CART SERVICE
const getCartInDateRangeService = (startDate: string,endDate:string): Promise<cartInterface[]> => {
    return Cart.find({
      date: { $gte: startDate, $lte: endDate }
    });

};

export {
  addCartService,
  getAllCartService,
  getCartService,
  limitCartResultService,
  sortCartService,
  updateCartService,
  deleteCartService,
  getUserCartsService,
  getCartInDateRangeService
};


// CPU BOUND
// try {
