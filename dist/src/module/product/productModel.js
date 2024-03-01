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
const FakeStoreSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
});
const UserModel = mongoose_1.default.model("FakeStore", FakeStoreSchema);
exports.default = UserModel;
