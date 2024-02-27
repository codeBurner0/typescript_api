import { Request, Response, NextFunction } from "express";
import {
  idSchema,
  numberValidateSchema,
  productSchema,
} from "../module/fakeStore/productJoiValidator";

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
    return res.status(400).json({ msg: error.details[0].message, data: [] });
  }
  next();
}

export {
  validateCreateProductRequest,
  validateIdRequest,
  validateLimitRequest,
};
