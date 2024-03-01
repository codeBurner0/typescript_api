"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productContoller_1 = require("./productContoller");
const product_joiValidation_1 = require("../../middleware/product.joiValidation");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use(cors_1.default());
// TESTING ROUTE
router.get("/", (req, res) => {
    res.send("Hello World from Router Side");
});
// POST API ENDPOINT
router.post("/", product_joiValidation_1.validateCreateProductRequest, productContoller_1.addProductController);
// GET SINGLE ITEM API ENDPOINT
router.get("/product/:id", product_joiValidation_1.validateIdRequest, productContoller_1.getSingleProductController);
// GET SINGLE ITEM API ENDPOINT
router.get("/limit/:limit", product_joiValidation_1.validateLimitRequest, productContoller_1.limitResultController);
// SORT ITEMS API ENDPOINT
router.get("/sort/:sortVal", product_joiValidation_1.validateSortValRequest, productContoller_1.sortController);
// GET ALL CATEGORIES ENDPOINT
router.get("/cate", productContoller_1.getAllCategoryController);
// GET ALL CATEGORIES ENDPOINT
router.get("/cate/:cat", product_joiValidation_1.validateCategoryRequest, productContoller_1.getProductByCategoryController);
// UPDTATE ITEMS ENDPOINT
router.put("/:id", product_joiValidation_1.validateUpdateProductRequest, productContoller_1.updateItemController);
// UPDTATE ITEMS ENDPOINT
router.delete("/:id", product_joiValidation_1.validateIdRequest, productContoller_1.deleteProductController);
exports.default = router;
