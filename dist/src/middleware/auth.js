"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authMiddleware = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token) {
            token = token.split(" ")[1];
            let decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
            req.userId = decodedToken.userId;
            next();
        }
        else {
            return res.json({ status: 401, msg: "Unauthorized user", data: "" });
        }
    }
    catch (error) {
        return res.json({ status: 500, msg: error.message, data: "" });
    }
};
exports.authMiddleware = authMiddleware;
