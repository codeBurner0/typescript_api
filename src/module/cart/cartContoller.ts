import { Request, Response } from "express";
import {
  addCartService,
  deleteCartService,
  getAllCartService,
  getCartInDateRangeService,
  getCartService,
  getUserCartsService,
  limitCartResultService,
  sortCartService,
  updateCartService,
} from "./cartService";
import { ICart, cartInterface } from "./cartInterface";

// ADD CART CONTROLLER
const addCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const body: cartInterface = req.body;
    const userId: string = req.userId;
    const cart: ICart = await addCartService(body, userId);
    return res
      .status(201)
      .json({ msg: "user create successfully", data: cart });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET ALL CARTS CONTROLLER
const getAllCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const cart: ICart[] | null = await getAllCartService();
    return res
      .status(200)
      .json({ msg: "all carts fetch successfully", data: cart });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET SINGLE CART CONTROLLER
const getSingleCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const cart: ICart | null = await getCartService(id);
    if (!cart) {
      return res.status(200).json({ msg: "no cart found", data: cart });
    }
    return res.status(200).json({ msg: "cart fetch successfully", data: cart });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET USER CARTS CONTROLLER
const getUserCartsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: string = req.userId;
    const cart: ICart[] | null = await getUserCartsService(id);
    if (!cart) {
      return res.status(200).json({ msg: "no cart found", data: cart });
    }
    return res.status(200).json({ msg: "cart fetch successfully", data: cart });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// LIMIT CART RESULT CONTROLLLER
const limitCartResultController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const limit: number = parseInt(req.params.limit);
    const result: ICart[] = await limitCartResultService(limit);
    return res.status(200).json({
      msg: "products fetch successfully with limitations",
      data: result,
    });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// SORTING CONTROLLER
const sortCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const sortOrder = req.params.sortVal;
    const sortedResults = await sortCartService(sortOrder);
    return res
      .status(200)
      .json({ msg: "sorted result successfully", data: [sortedResults] });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// UPDATE ITEMS CONTROLLER
const updateCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id: string = req.params.id;
    const body: cartInterface = req.body;
    const updatedItem = await updateCartService(id, body);
    if (updatedItem) {
      return res
        .status(201)
        .json({ msg: "cart update successfully", data: updatedItem });
    }
    return res
      .status(201)
      .json({ msg: "cart updated unsuccessfully", data: updatedItem });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// DELETE ITEMS CONTROLLER
const deleteCartController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteCartService(id);
    return res.status(200).json({
      msg: "delete cart successfully",
      data: [deletedItem],
    });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET CART IN DATE RANGE CONTROLLER
const getCartInDateRangeController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const startDate: string = req.body.startDate;
    const endDate: string = req.body.endDate;
    const cart: ICart[] = await getCartInDateRangeService(startDate, endDate);
    return res.status(200).json({
      msg: "fetch carts successfully",
      data: [cart],
    });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

export {
  addCartController,
  getAllCartController,
  getSingleCartController,
  limitCartResultController,
  sortCartController,
  updateCartController,
  deleteCartController,
  getUserCartsController,
  getCartInDateRangeController,
};
