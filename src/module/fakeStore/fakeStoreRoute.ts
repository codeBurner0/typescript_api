import express, { Request, Response } from "express";
import cors from "cors";
import {
  createItemController,
  getSingleItemController,
} from "./fakeStoreContoller";

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Router Side");
});

// POST API ENDPOINT
router.post("/", createItemController);

// GET SINGLE ITEM API ENDPOINT
router.get("/:id", getSingleItemController);

export default router;
