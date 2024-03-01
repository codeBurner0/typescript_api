"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const productSchema = new mongoose_1.Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
});
const cartSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    date: { type: String, required: true, unique: true },
    products: { type: [productSchema], required: true },
});
const UserModel = mongoose_1.default.model("cart", cartSchema);
exports.default = UserModel;
