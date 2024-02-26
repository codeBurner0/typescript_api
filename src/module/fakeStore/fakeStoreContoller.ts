import { Request, Response } from "express";
import { createItemService, getSingleItemService } from "./fakeStoreService";

// CREATE ITEM CONTROLLER
const createItemController = (req: Request, res: Response) => {
  createItemService(req, res);
};

// GET SINGLE ITEM CONTROLLER
const getSingleItemController = (req: Request, res: Response) => {
  getSingleItemService(req, res);
};

export { createItemController, getSingleItemController };
