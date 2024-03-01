"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const cart = joi_1.default.object({
    productId: joi_1.default.number().integer().positive().required(),
    quantity: joi_1.default.number().integer().positive().required(),
});
const cartSchema = joi_1.default.object({
    products: joi_1.default.array().items(cart).required(),
});
exports.cartSchema = cartSchema;
const idSchema = joi_1.default.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required();
exports.idSchema = idSchema;
const numberValidateSchema = joi_1.default.number().required();
exports.numberValidateSchema = numberValidateSchema;
const stringValidateSchema = joi_1.default.string().required();
exports.stringValidateSchema = stringValidateSchema;
