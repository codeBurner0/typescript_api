import Joi from "joi";

const nameSchema = Joi.string().min(2).max(50).required();
const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
  .required();

const userSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const idSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();

const numberValidateSchema = Joi.number().required();
const stringValidateSchema = Joi.string().required();

export { userSchema, idSchema, numberValidateSchema, stringValidateSchema };
