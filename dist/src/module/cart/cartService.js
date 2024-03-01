"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cartModel_1 = __importDefault(require("./cartModel"));
// ADD CART ITEM SERVICE
const addCartService = async (body, userId) => {
    const cart = new cartModel_1.default({
        userId: userId,
        date: Date().toString(),
        products: body.products,
        body: body.products,
    });
    console.log(body);
    return cart.save();
};
exports.addCartService = addCartService;
// GET ALL CARTS SERVICE
const getAllCartService = async () => {
    return cartModel_1.default.find({});
};
exports.getAllCartService = getAllCartService;
// GET SINGLE CART SERVICE
const getCartService = async (id) => {
    return cartModel_1.default.findOne({ _id: id });
};
exports.getCartService = getCartService;
// LIMIT CART API
const limitCartResultService = async (limit) => {
    return cartModel_1.default.find().limit(limit);
};
exports.limitCartResultService = limitCartResultService;
// GET USER CARTS SERVICE
const getUserCartsService = async (userId) => {
    console.log(userId);
    return cartModel_1.default.find({ userId: userId });
};
exports.getUserCartsService = getUserCartsService;
// SORT CARTS BY ID SERVICE
const sortCartService = async (sortVal) => {
    try {
        const sortOrder = sortVal === "asc" ? 1 : -1;
        return cartModel_1.default.find().select({ date: 1 }).sort({ date: sortOrder }).exec();
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.sortCartService = sortCartService;
// UPDATE CART  SERVICE
const updateCartService = (id, body) => {
    return cartModel_1.default.updateOne({ _id: id }, { $set: body });
};
exports.updateCartService = updateCartService;
// DELETE CART SERVICE
const deleteCartService = (id) => {
    return cartModel_1.default.findByIdAndDelete(id);
};
exports.deleteCartService = deleteCartService;
// DELETE CART SERVICE
const getCartInDateRangeService = (startDate, endDate) => {
    return cartModel_1.default.find({
        date: { $gte: startDate, $lte: endDate }
    });
};
exports.getCartInDateRangeService = getCartInDateRangeService;
// CPU BOUND
// try {
