"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productJoiValidator_1 = require("../module/product/productJoiValidator");
function validateCreateProductRequest(req, res, next) {
    const { error } = productJoiValidator_1.productSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}
exports.validateCreateProductRequest = validateCreateProductRequest;
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
function validateCategoryRequest(req, res, next) {
    let { error, value } = productJoiValidator_1.stringValidateSchema.validate(req.params.cat);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message, data: [] });
    }
    next();
}
exports.validateCategoryRequest = validateCategoryRequest;
function validateUpdateProductRequest(req, res, next) {
    const { error: itemErr } = productJoiValidator_1.productSchema.validate(req.body);
    if (itemErr) {
        return res.status(400).json({ msg: itemErr.details[0].message, data: [] });
    }
    const { error } = productJoiValidator_1.idSchema.validate(req.params.id);
    if (error) {
        return res.status(400).json({ msg: error.details[0].message, data: [] });
    }
    next();
}
exports.validateUpdateProductRequest = validateUpdateProductRequest;
