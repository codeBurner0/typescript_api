import express, { Request, Response } from "express";
import cors from "cors";
import {
  addProductController,
  deleteProductController,
  getAllCategoryController,
  getProductByCategoryController,
  getSingleProductController,
  limitResultController,
  sortController,
  updateItemController,
} from "./cartContoller";

import {
  validateCreateProductRequest,
  validateIdRequest,
  validateLimitRequest,
  validateSortValRequest,
  validateCategoryRequest,
  validateUpdateProductRequest,
} from "../../middleware/product.joiValidation";

const router = express.Router();

router.use(express.json());
router.use(cors());

// TESTING ROUTE
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Router Side");
});

// POST API ENDPOINT
router.post("/", validateCreateProductRequest, addProductController);

// GET SINGLE ITEM API ENDPOINT
router.get("/product/:id", validateIdRequest, getSingleProductController);

// GET SINGLE ITEM API ENDPOINT
router.get("/limit/:limit", validateLimitRequest, limitResultController);

// SORT ITEMS API ENDPOINT
router.get("/sort/:sortVal", validateSortValRequest, sortController);

// GET ALL CATEGORIES ENDPOINT
router.get("/cate", getAllCategoryController);

// GET ALL CATEGORIES ENDPOINT
router.get(
  "/cate/:cat",
  validateCategoryRequest,
  getProductByCategoryController
);

// UPDTATE ITEMS ENDPOINT
router.put("/:id", validateUpdateProductRequest, updateItemController);

// UPDTATE ITEMS ENDPOINT
router.delete("/:id", validateIdRequest, deleteProductController);

export default router;
