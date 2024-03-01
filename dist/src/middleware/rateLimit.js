"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const limiter = express_rate_limit_1.default({
    max: 5,
    windowMs: 60 * 60 * 1000,
    message: "too many requests.Please try again later",
});
exports.default = limiter;
