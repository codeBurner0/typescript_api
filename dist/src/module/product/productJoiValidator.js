"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const productSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    description: joi_1.default.string().required(),
    image: joi_1.default.string().uri().required(),
    category: joi_1.default.string().required(),
});
exports.productSchema = productSchema;
const idSchema = joi_1.default.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required();
exports.idSchema = idSchema;
const numberValidateSchema = joi_1.default.number().required();
exports.numberValidateSchema = numberValidateSchema;
const stringValidateSchema = joi_1.default.string().required();
exports.stringValidateSchema = stringValidateSchema;
