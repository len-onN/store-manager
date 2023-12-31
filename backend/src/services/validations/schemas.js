const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const newProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

module.exports = {
  idSchema,
  newProductSchema,
};
