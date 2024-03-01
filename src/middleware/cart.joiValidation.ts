import { Request, Response, NextFunction } from "express";
import {
  idSchema,
  numberValidateSchema,
  productSchema,
  stringValidateSchema,
} from "../module/product/productJoiValidator";
import { cartSchema } from "../module/cart/cartJoiSchemas";

function validateCreateCartRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { error } = cartSchema.validate(req.body);
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

export {
  validateCreateCartRequest,
  validateIdRequest,
  validateLimitRequest,
  validateSortValRequest,
};
