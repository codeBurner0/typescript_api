"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const nameSchema = joi_1.default.string().min(2).max(50).required();
const emailSchema = joi_1.default.string().email().required();
const passwordSchema = joi_1.default.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required();
const userSchema = joi_1.default.object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
});
exports.userSchema = userSchema;
const idSchema = joi_1.default.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required();
exports.idSchema = idSchema;
const numberValidateSchema = joi_1.default.number().required();
exports.numberValidateSchema = numberValidateSchema;
const stringValidateSchema = joi_1.default.string().required();
exports.stringValidateSchema = stringValidateSchema;
