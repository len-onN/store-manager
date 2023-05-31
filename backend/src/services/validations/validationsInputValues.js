const { idSchema, newProductSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateNewProduct = (product) => {
  const { error } = newProductSchema.validate(product);
  console.log(error);
  if (error) return { type: error.type, message: error.message };
};

module.exports = { validateId, validateNewProduct };
