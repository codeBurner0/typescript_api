import { Request, Response } from "express";
import {
  idSchema,
  numberValidateSchema,
  stringValidateSchema,
} from "./productJoiValidator";
import FakeStore from "./productModel";
import { FakeStoreInterface, addProductInterface } from "./productInterface";

// CREATE ITEM SERVICE
const addProductService = (body: addProductInterface) => {
  try {
    const newProduct = new FakeStore(body);
    return newProduct.save();
  } catch (error: any) {
    const msg = error.message;
    return msg;
  }
};

// GET SINGLE ITEM SERVICE
const getSingleProductService = (id: string) => {
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
const sortService = async (sortVal: string) => {
  try {
    const sortOrder = sortVal === "asc" ? 1 : -1;
    return FakeStore.find()
      .select({ price: 1 })
      .sort({ price: sortOrder })
      .exec();
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// GET ALL CATEGORIES SERVICE
const getAllCategoryService = async () => {
  try {
    const categories = await FakeStore.aggregate([
      { $group: { _id: "$category" } },
      { $project: { _id: 0, category: "$_id" } },
    ]);
    return categories.map(
      (category: { category: string }) => category.category
    );
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// GET ITEMS BY CATEGORIES SERVICE
const getProductByCategoryService = (category: string) => {
  try {
    return FakeStore.find({ category: category });
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// UPDATE AN ITEM SERVICE
const updateProductService = (id: string, body: addProductInterface) => {
  try {
    return FakeStore.updateOne<FakeStoreInterface>({ _id: id }, { $set: body });
  } catch (error) {
    const msg = error;
    return msg;
  }
};

// DELETE ITEMS SERVICE
const deleteProductService = (id: string) => {
  try {
    return FakeStore.findByIdAndDelete(id);
  } catch (error) {
    const msg = error;
    return msg;
  }
};

export {
  addProductService,
  getSingleProductService,
  limitResultService,
  sortService,
  getAllCategoryService,
  getProductByCategoryService,
  updateProductService,
  deleteProductService,
};
