"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = require("./productService");
// ADD ITEM CONTROLLER
const addProductController = async (req, res) => {
    try {
        const body = req.body;
        const savedProduct = await productService_1.addProductService(body);
        return res
            .status(201)
            .json({ msg: "item create successfully", data: savedProduct });
    }
    catch (err) {
        console.error("Error creating product:", err);
        res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.addProductController = addProductController;
// GET SINGLE ITEM CONTROLLER
const getSingleProductController = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService_1.getSingleProductService(id);
        return res
            .status(200)
            .json({ msg: "product fetch successfully", data: product });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getSingleProductController = getSingleProductController;
// LIMIT RESULT CONTROLLLER
const limitResultController = async (req, res) => {
    try {
        const limit = parseInt(req.params.limit);
        const result = await productService_1.limitResultService(limit);
        return res
            .status(200)
            .json({ msg: "products fetch successfully", data: result });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.limitResultController = limitResultController;
// SORTING CONTROLLER
const sortController = async (req, res) => {
    try {
        const sortOrder = req.params.sortVal;
        const sortedResults = await productService_1.sortService(sortOrder);
        return res
            .status(200)
            .json({ msg: "sorted result successfully", data: [sortedResults] });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.sortController = sortController;
// GET ALL CATEGORIES
const getAllCategoryController = async (req, res) => {
    try {
        const categoryList = await productService_1.getAllCategoryService();
        return res
            .status(200)
            .json({ msg: "fetch all categories successfully", data: [categoryList] });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getAllCategoryController = getAllCategoryController;
// GET ITEMS BY CATEGORIES CONTROLLER
const getProductByCategoryController = async (req, res) => {
    try {
        const category = req.params.cat;
        const result = await productService_1.getProductByCategoryService(category);
        return res.status(200).json({
            msg: "fetch all result by category successfully",
            data: [result],
        });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getProductByCategoryController = getProductByCategoryController;
// UPDATE ITEMS CONTROLLER
const updateItemController = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updatedItem = await productService_1.updateProductService(id, body);
        if (updatedItem) {
            return res
                .status(201)
                .json({ msg: "item create successfully", data: updatedItem });
        }
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.updateItemController = updateItemController;
// DELETE ITEMS CONTROLLER
const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await productService_1.deleteProductService(id);
        return res.status(200).json({
            msg: "delete product successfully",
            data: [deletedItem],
        });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.deleteProductController = deleteProductController;
