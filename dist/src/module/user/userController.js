"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = require("./userService");
// ADD USER CONTROLLER
const addUserController = async (req, res) => {
    try {
        const body = req.body;
        const user = await userService_1.addUserService(body);
        return res
            .status(201)
            .json({ msg: "user create successfully", data: user });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.addUserController = addUserController;
// GET ALL USERS CONTROLLER
const getAllUserController = async (req, res) => {
    try {
        const user = await userService_1.getAllUserService();
        return res
            .status(200)
            .json({ msg: "all users fetch successfully", data: user });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getAllUserController = getAllUserController;
// GET USER CONTROLLER
const getUserController = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userService_1.getUserService(id);
        if (user === null) {
            return res.status(400).json({ msg: "no user found", data: user });
        }
        return res.status(200).json({ msg: "user fetch successfully", data: user });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message, data: [] });
    }
};
exports.getUserController = getUserController;
