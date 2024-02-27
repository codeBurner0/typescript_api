import { Request, Response } from "express";
import {
  createProductService,
  getAllCategoryService,
  getItemByCategoryService,
  getSingleProductService,
  limitResultService,
  sortService,
  updateItemService,
} from "./productService";

// CREATE ITEM CONTROLLER
const createProductController = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const savedProduct = await createProductService(body);
    return res
      .status(201)
      .json({ msg: "item create successfully", data: savedProduct });
  } catch (err: any) {
    console.error("Error creating product:", err);
    res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET SINGLE ITEM CONTROLLER
const getSingleProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = await getSingleProductService(id);
    return res
      .status(201)
      .json({ msg: "item fetch successfully", data: product });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// LIMIT RESULT CONTROLLLER
const limitResultController = (req: Request, res: Response) => {
  try {
    const limit =req.params.limit;
    const result = limitResultService(limit);
    return res
      .status(201)
      .json({ msg: "item fetch successfully", data: result });
  } catch (err: any) {
    return res.status(500).json({ msg: err.message, data: [] });
  }
};

// SORTING CONTROLLER
const sortController = (req: Request, res: Response) => {
  sortService(req, res);
};

// GET ALL CATEGORIES
const getAllCategoryController = async (req: Request, res: Response) => {
  const body = req.body;
  const categoryLIst = await getAllCategoryService(body);
  return res.json({ data: "hello" });
  // getAllCategoryService(req, res);
};

// GET ITEMS BY CATEGORIES CONTROLLER
const getItemByCategoryController = (req: Request, res: Response) => {
  getItemByCategoryService(req, res);
};

// UPDATE ITEMS CONTROLLER
const updateItemController = (req: Request, res: Response) => {
  updateItemService(req, res);
};

export {
  createProductController,
  getSingleProductController,
  limitResultController,
  sortController,
  getAllCategoryController,
  getItemByCategoryController,
  updateItemController,
};
