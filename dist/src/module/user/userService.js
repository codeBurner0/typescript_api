"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// CREATE ITEM SERVICE
const addUserService = async (body) => {
    const { email, name, password } = body;
    const existingUser = await userModel_1.default.findOne({
        $and: [{ email }, { name }],
    });
    if (existingUser) {
        throw "User already exists";
    }
    const salt = await bcrypt_1.default.genSalt(10);
    const hashedPassword = await bcrypt_1.default.hash(password, salt);
    const newUser = new userModel_1.default({
        password: hashedPassword,
        name: name,
        email: email,
    });
    await newUser.save();
    const token = jsonwebtoken_1.default.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY);
    return token;
};
exports.addUserService = addUserService;
// GET ALL USERS SERVICE
const getAllUserService = async () => {
    return userModel_1.default.find({});
};
exports.getAllUserService = getAllUserService;
// GET SINGLE USER SERVICE
const getUserService = async (id) => {
    return userModel_1.default.findOne({ _id: id });
};
exports.getUserService = getUserService;
