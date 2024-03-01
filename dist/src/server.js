"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connectDB_1 = __importDefault(require("./connection/connectDB"));
const dotenv_1 = __importDefault(require("dotenv"));
const productRoute_1 = __importDefault(require("./module/product/productRoute"));
const userRoute_1 = __importDefault(require("./module/user/userRoute"));
const cartRoute_1 = __importDefault(require("./module/cart/cartRoute"));
const app = express_1.default();
dotenv_1.default.config();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
app.use("/product", productRoute_1.default);
app.use("/user", userRoute_1.default);
app.use("/cart", cartRoute_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const startServer = async () => {
    await connectDB_1.default();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
startServer();
