"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productJoiValidator_1 = require("../module/product/productJoiValidator");
const cartJoiSchemas_1 = require("../module/cart/cartJoiSchemas");
function validateCreateCartRequest(req, res, next) {
    const { error } = cartJoiSchemas_1.cartSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateCreateCartRequest = validateCreateCartRequest;
function validateIdRequest(req, res, next) {
    const { error } = productJoiValidator_1.idSchema.validate(req.params.id);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateIdRequest = validateIdRequest;
function validateLimitRequest(req, res, next) {
    const { error, value } = productJoiValidator_1.numberValidateSchema.validate(parseInt(req.params.limit));
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateLimitRequest = validateLimitRequest;
function validateSortValRequest(req, res, next) {
    let { error, value } = productJoiValidator_1.stringValidateSchema.validate(req.params.sortVal);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateSortValRequest = validateSortValRequest;
