import { Request, Response, NextFunction } from "express";
import {
  idSchema,
  numberValidateSchema,
  productSchema,
  stringValidateSchema,
} from "../module/product/productJoiValidator";

function validateCreateProductRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

function validateIdRequest(req: Request, res: Response, next: NextFunction) {
  const { error } = idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

function validateLimitRequest(req: Request, res: Response, next: NextFunction) {
  const { error, value } = numberValidateSchema.validate(
    parseInt(req.params.limit)
  );
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

function validateSortValRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { error, value } = stringValidateSchema.validate(req.params.sortVal);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

function validateCategoryRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let { error, value } = stringValidateSchema.validate(req.params.cat);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message, data: [] });
  }
  next();
}

function validateUpdateProductRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error: itemErr } = productSchema.validate(req.body);
  if (itemErr) {
    return res.status(400).json({ msg: itemErr.details[0].message, data: [] });
  }
  const { error } = idSchema.validate(req.params.id);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message, data: [] });
  }
  next();
}

export {
  validateCreateProductRequest,
  validateIdRequest,
  validateLimitRequest,
  validateSortValRequest,
  validateCategoryRequest,
  validateUpdateProductRequest
};
