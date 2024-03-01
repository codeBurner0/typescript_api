"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userJoiSchema_1 = require("../module/user/userJoiSchema");
function validateAddUserRequest(req, res, next) {
    const { error } = userJoiSchema_1.userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateAddUserRequest = validateAddUserRequest;
