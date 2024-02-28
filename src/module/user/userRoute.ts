import express, { Request, Response } from "express";
import cors from "cors";
import {
  addUserController,
  getAllUserController,
  getUserController,
} from "./userController";

import { validateAddUserRequest } from "../../middleware/user.joiValidation";
import { validateIdRequest } from "../../middleware/product.joiValidation";
import authMiddleware from "../../middleware/auth";

const router = express.Router();

router.use(express.json());
router.use(cors());

// TESTING ROUTE ENDPOINT
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from User Side");
});

// ADD USER ENDPOINT
router.post("/", validateAddUserRequest, addUserController);

// GET ALL USERS ENDPOINT
router.get("/all", authMiddleware, getAllUserController);

// GET SINGLE USER ENDPOINT
router.get("/:id", authMiddleware, validateIdRequest, getUserController);

export default router;
