"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const createLogger = () => winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "api.log" }),
    ],
});
const logger = createLogger();
exports.loggingMiddleware = (req, res, next) => {
    logger.info(`Method: ${req.method}, Path: ${req.url}, Status:${res.statusCode}`);
    next();
};
