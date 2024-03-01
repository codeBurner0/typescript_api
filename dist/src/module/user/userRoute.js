"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userController_1 = require("./userController");
const user_joiValidation_1 = require("../../middleware/user.joiValidation");
const product_joiValidation_1 = require("../../middleware/product.joiValidation");
const auth_1 = require("../../middleware/auth");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.use(cors_1.default());
// TESTING ROUTE ENDPOINT
router.get("/", (req, res) => {
    res.send("Hello World from User Side");
});
// ADD USER ENDPOINT
router.post("/", user_joiValidation_1.validateAddUserRequest, userController_1.addUserController);
// GET ALL USERS ENDPOINT
router.get("/all", auth_1.authMiddleware, userController_1.getAllUserController);
// GET SINGLE USER ENDPOINT
router.get("/:id", auth_1.authMiddleware, product_joiValidation_1.validateIdRequest, userController_1.getUserController);
exports.default = router;
