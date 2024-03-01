"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cartContoller_1 = require("./cartContoller");
// import { validateCreateProductRequest } from "../../middleware/product.joiValidation";
const auth_1 = require("../../middleware/auth");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use(cors_1.default());
router.use(auth_1.authMiddleware);
// TESTING ROUTE
router.get("/", (req, res) => {
    res.send("Hello World from Cart Side");
});
// POST API ENDPOINT
router.post("/", cartContoller_1.addCartController);
// GET SINGLE USER ENDPOINT
router.get("/all", cartContoller_1.getAllCartController);
// GET USER CARTS ENDPOINT
router.get("/user", cartContoller_1.getUserCartsController);
// GET USER CARTS IN DATE RANGE ENDPOINT
router.get("/dates", cartContoller_1.getCartInDateRangeController);
// GET CARTS BY LIMIT API ENDPOINT
router.get("/limit/:limit", cartContoller_1.limitCartResultController);
// SORT ITEMS API ENDPOINT
router.get("/sort/:sortVal", cartContoller_1.sortCartController);
// UPDTATE CART ENDPOINT
router.put("/:id", cartContoller_1.updateCartController);
// UPDTATE CART ENDPOINT
router.delete("/:id", cartContoller_1.deleteCartController);
// GET SINGLE CART ENDPOINT
router.get("/:id", cartContoller_1.getSingleCartController);
exports.default = router;
