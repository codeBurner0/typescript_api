import express, { Request, Response } from "express";
import cors from "cors";
import {
  createProductController,
  getAllCategoryController,
  getItemByCategoryController,
  getSingleProductController,
  limitResultController,
  sortController,
  updateItemController,
} from "./productContoller";
import {
  validateCreateProductRequest,
  validateIdRequest,
  validateLimitRequest,
} from "../../middleware/joiValidation";

const router = express.Router();

router.use(express.json());
router.use(cors());

// TESTING ROUTE
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Router Side");
});

// POST API ENDPOINT
router.post("/", validateCreateProductRequest, createProductController);

// GET SINGLE ITEM API ENDPOINT
router.get("/product/:id", validateIdRequest, getSingleProductController);

// GET SINGLE ITEM API ENDPOINT
router.get("/limit/:limit", validateLimitRequest, limitResultController);

// GET SINGLE ITEM API ENDPOINT
router.get("/sort/:sort", sortController);

// GET ALL CATEGORIES ENDPOINT
router.get("/cate", getAllCategoryController);

// GET ALL CATEGORIES ENDPOINT
router.get("/cate/:cat", getItemByCategoryController);

// UPDTATE ITEMS ENDPOINT
router.put("/:id", updateItemController);

export default router;

//joi
