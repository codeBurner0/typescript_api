import { Request, Response } from "express";
import {
  idSchema,
  numberValidateSchema,
  stringValidateSchema,
} from "./productJoiValidator";
import FakeStore from "./productModel";
import { FakeStoreInterface, createProductInterface } from "./productInterface";

// CREATE ITEM SERVICE
const createProductService = (body: createProductInterface) => {
  try {
    const newProduct = new FakeStore(body);
    return newProduct.save();
  } catch (error: any) {
    const msg = error.message;
    return msg;
  }
};

// GET SINGLE ITEM SERVICE
const getSingleProductService = async (id: string) => {
  try {
    return FakeStore.findById(id);
  } catch (err: any) {
    const msg = err.message;
    return msg;
  }
};

// LIMIT RESULT API
const limitResultService = async (limit: number) => {
  try {
    return FakeStore.find().limit(limit);
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// SORT SERVICE
const sortService = async (req: Request, res: Response) => {
  try {
    let { error, value } = stringValidateSchema.validate(
      parseInt(req.params.sort)
    );
    if (error) {
      return res.status(400).json({ msg: error.details[0].message, data: [] });
    }
    const sortOrder = value === "asc" ? 1 : -1;
    const sortedResults = await FakeStore.find()
      .select({ price: 1 })
      .sort({ price: sortOrder })
      .exec();
    res.json(sortedResults);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET ALL CATEGORIES SERVICE
const getAllCategoryService = async (body: any) => {
  try {
    const categories = await FakeStore.aggregate([
      { $group: { _id: "$category" } },
      { $project: { _id: 0, category: "$_id" } },
    ]);
    const uniqueCategories = categories.map(
      (category: { category: string }) => category.category
    );
  } catch (err) {}

  // return uniqueCategories
};

// GET ITEMS BY CATEGORIES SERVICE
const getItemByCategoryService = async (req: Request, res: Response) => {
  try {
    let { error, value } = stringValidateSchema.validate(req.params.cat);
    console.log(value);
    console.log(error);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message, data: [] });
    }
    const results = await FakeStore.find({ category: value });
    res.json(results);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE AN ITEM SERVICE
const updateItemService = async (req: Request, res: Response) => {
  // try {
  //   const { error: itemErr, value: ItemVal } = itemSchema.validate(req.body);
  //   if (itemErr) {
  //     return res
  //       .status(400)
  //       .json({ msg: itemErr.details[0].message, data: [] });
  //   }
  //   const { error, value } = idSchema.validate(req.params.id);
  //   if (error) {
  //     return res.status(400).json({ msg: error.details[0].message, data: [] });
  //   }
  //   console.log(value, ItemVal);
  //   const updatedItem = await FakeStore.updateOne<FakeStoreInterface>(
  //     { _id: value },
  //     { $set: ItemVal }
  //   );
  //   console.log(updatedItem);
  //   if (updatedItem) {
  //     return res
  //       .status(201)
  //       .json({ msg: "item create successfully", data: updatedItem });
  //   }
  // } catch (err: any) {
  //   console.error("Error creating product:", err);
  //   res.status(500).json({ msg: err.message, data: [] });
  // }
};

// DELETE ITEMS SERVICE
const deleteItemService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedItem = await FakeStore.findByIdAndDelete<FakeStoreInterface>(
      id
    );

    if (!deletedItem) {
      return res.status(404).json({ msg: "Item not found" });
    }

    res.status(200).json({ msg: "Item deleted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export {
  createProductService,
  getSingleProductService,
  limitResultService,
  sortService,
  getAllCategoryService,
  getItemByCategoryService,
  updateItemService,
};
