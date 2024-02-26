import Joi from "joi";

const itemSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  image: Joi.string().uri().required(),
  category: Joi.string().required(),
});

const idSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();

export { itemSchema, idSchema };
