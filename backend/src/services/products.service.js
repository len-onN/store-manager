const { productsModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const findAll = async () => {
  const productsList = await productsModel.findAll();
  if (!productsList) return { type: 'INTERNAL_ERROR', message: 'Internal Error' };
  return { type: null, message: productsList };
};

const findById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const product = await productsModel.findById(productId);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const createNewProduct = async (name) => {
  // const error = schema.validateNewProduct(name);
  // if (error.type) return error;

  const newProductId = await productsModel.insertNewProduct({ name });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  createNewProduct,
};
