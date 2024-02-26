import { Request, Response } from "express";
import { itemSchema, idSchema } from "./fakeStoreValidator";
import FakeStore from "./fakeStoreModel";
import { FakeStoreInterface } from "./fakeStoreInterface";

// CREATE ITEM SERVICE
const createItemService = async (req: Request, res: Response) => {
  try {
    const { error, value } = itemSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message, data: [] });
    }
    const newItem = new FakeStore<FakeStoreInterface>(value);
    const savedProduct = await newItem.save();
    res
      .status(201)
      .json({ msg: "item create successfully", data: savedProduct });
  } catch (err: any) {
    console.error("Error creating product:", err);
    res.status(500).json({ msg: err.message, data: [] });
  }
};

// GET SINGLE ITEM SERVICE
const getSingleItemService = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { error } = idSchema.validate(id);
    if (error) {
      return res.status(400).json({ msg: "error.details[0].message", data: [] });
    }
    console.log(id)
    const result = await FakeStore.findById(id);
    console.log(result)
    res.status(201).json({ msg: "item create successfully", data: result });
  } catch (err: any) {
    res.status(500).json({ msg: "err.message", data: [] });
  }
};

export { createItemService,getSingleItemService };
