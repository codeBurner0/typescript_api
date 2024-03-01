"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cartService_1 = require("./cartService");
// ADD CART CONTROLLER
const addCartController = async (req, res) => {
    try {
        const body = req.body;
        const userId = req.userId;
        const cart = await cartService_1.addCartService(body, userId);
        return res
            .status(201)
            .json({ msg: "user create successfully", data: cart });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.addCartController = addCartController;
// GET ALL CARTS CONTROLLER
const getAllCartController = async (req, res) => {
    try {
        console.log("hii");
        const cart = await cartService_1.getAllCartService();
        return res
            .status(200)
            .json({ msg: "all carts fetch successfully", data: cart });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getAllCartController = getAllCartController;
// GET SINGLE CART CONTROLLER
const getSingleCartController = async (req, res) => {
    try {
        const id = req.params.id;
        const cart = await cartService_1.getCartService(id);
        if (!cart) {
            return res.status(200).json({ msg: "no cart found", data: cart });
        }
        return res.status(200).json({ msg: "cart fetch successfully", data: cart });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getSingleCartController = getSingleCartController;
// GET USER CARTS CONTROLLER
const getUserCartsController = async (req, res) => {
    try {
        console.log("hii");
        const id = req.userId;
        console.log(id);
        const cart = await cartService_1.getUserCartsService(id);
        if (!cart) {
            return res.status(200).json({ msg: "no cart found", data: cart });
        }
        return res.status(200).json({ msg: "cart fetch successfully", data: cart });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getUserCartsController = getUserCartsController;
// LIMIT CART RESULT CONTROLLLER
const limitCartResultController = async (req, res) => {
    try {
        const limit = parseInt(req.params.limit);
        const result = await cartService_1.limitCartResultService(limit);
        return res.status(200).json({
            msg: "products fetch successfully with limitations",
            data: result,
        });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.limitCartResultController = limitCartResultController;
// SORTING CONTROLLER
const sortCartController = async (req, res) => {
    try {
        const sortOrder = req.params.sortVal;
        const sortedResults = await cartService_1.sortCartService(sortOrder);
        return res
            .status(200)
            .json({ msg: "sorted result successfully", data: [sortedResults] });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.sortCartController = sortCartController;
// UPDATE ITEMS CONTROLLER
const updateCartController = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedItem = await cartService_1.updateCartService(id, body);
        if (updatedItem) {
            return res
                .status(201)
                .json({ msg: "cart update successfully", data: updatedItem });
        }
        return res
            .status(201)
            .json({ msg: "cart updated unsuccessfully", data: updatedItem });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.updateCartController = updateCartController;
// DELETE ITEMS CONTROLLER
const deleteCartController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await cartService_1.deleteCartService(id);
        return res.status(200).json({
            msg: "delete cart successfully",
            data: [deletedItem],
        });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.deleteCartController = deleteCartController;
// GET CART IN DATE RANGE CONTROLLER
const getCartInDateRangeController = async (req, res) => {
    try {
        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        const cart = await cartService_1.getCartInDateRangeService(startDate, endDate);
        return res.status(200).json({
            msg: "fetch carts successfully",
            data: [cart],
        });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getCartInDateRangeController = getCartInDateRangeController;
