"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("./productModel"));
// CREATE ITEM SERVICE
const addProductService = (body) => {
    try {
        const newProduct = new productModel_1.default(body);
        return newProduct.save();
    }
    catch (error) {
        const msg = error.message;
        return msg;
    }
};
exports.addProductService = addProductService;
// GET SINGLE ITEM SERVICE
const getSingleProductService = (id) => {
    try {
        return productModel_1.default.findById(id);
    }
    catch (err) {
        const msg = err.message;
        return msg;
    }
};
exports.getSingleProductService = getSingleProductService;
// LIMIT RESULT API
const limitResultService = async (limit) => {
    try {
        return productModel_1.default.find().limit(limit);
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.limitResultService = limitResultService;
// SORT SERVICE
const sortService = async (sortVal) => {
    try {
        const sortOrder = sortVal === "asc" ? 1 : -1;
        return productModel_1.default.find()
            .select({ price: 1 })
            .sort({ price: sortOrder })
            .exec();
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.sortService = sortService;
// GET ALL CATEGORIES SERVICE
const getAllCategoryService = async () => {
    try {
        const categories = await productModel_1.default.aggregate([
            { $group: { _id: "$category" } },
            { $project: { _id: 0, category: "$_id" } },
        ]);
        return categories.map((category) => category.category);
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.getAllCategoryService = getAllCategoryService;
// GET ITEMS BY CATEGORIES SERVICE
const getProductByCategoryService = (category) => {
    try {
        return productModel_1.default.find({ category: category });
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.getProductByCategoryService = getProductByCategoryService;
// UPDATE AN ITEM SERVICE
const updateProductService = (id, body) => {
    try {
        return productModel_1.default.updateOne({ _id: id }, { $set: body });
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.updateProductService = updateProductService;
// DELETE ITEMS SERVICE
const deleteProductService = (id) => {
    try {
        return productModel_1.default.findByIdAndDelete(id);
    }
    catch (error) {
        const msg = error;
        return msg;
    }
};
exports.deleteProductService = deleteProductService;
