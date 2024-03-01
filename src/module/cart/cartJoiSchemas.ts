import Joi from "joi";

const cart = Joi.object({
  productId: Joi.number().integer().positive().required(),
  quantity: Joi.number().integer().positive().required(),
});

const cartSchema = Joi.object({
  products: Joi.array().items(cart).required(),
});

const idSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();

const numberValidateSchema = Joi.number().required();
const stringValidateSchema = Joi.string().required();

export { cartSchema, idSchema, numberValidateSchema, stringValidateSchema };
