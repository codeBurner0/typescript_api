import express, { Request, Response } from "express";
import cors from "cors";
import {
  addCartController,
  deleteCartController,
  getAllCartController,
  getCartInDateRangeController,
  getSingleCartController,
  getUserCartsController,
  limitCartResultController,
  sortCartController,
  updateCartController,
} from "./cartContoller";

// import { validateCreateProductRequest } from "../../middleware/product.joiValidation";
import { authMiddleware } from "../../middleware/auth";

const router = express.Router();

router.use(express.json());
router.use(cors());
router.use(authMiddleware);

// TESTING ROUTE
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Cart Side");
});

// POST API ENDPOINT
router.post("/", addCartController);

// GET SINGLE USER ENDPOINT
router.get("/all", getAllCartController);

// GET USER CARTS ENDPOINT
router.get("/user", getUserCartsController);

// GET USER CARTS IN DATE RANGE ENDPOINT
router.get("/dates", getCartInDateRangeController);

// GET CARTS BY LIMIT API ENDPOINT
router.get("/limit/:limit", limitCartResultController);

// SORT ITEMS API ENDPOINT
router.get("/sort/:sortVal", sortCartController);

// UPDTATE CART ENDPOINT
router.put("/:id", updateCartController);

// UPDTATE CART ENDPOINT
router.delete("/:id", deleteCartController);

// GET SINGLE CART ENDPOINT
router.get("/:id", getSingleCartController);

export default router;


