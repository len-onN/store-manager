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

const createNewProduct = async (product) => {
  // const error = schema.validateNewProduct({ name: product });
  // if (error) return error;

  const newProductId = await productsModel.insertNewProduct({ name: product });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const reProduct = async (id, name) => {
  const /* [{ info }] */ result = await productsModel.reProduct(id, name);
  if (result[0].info === 'Rows matched: 0  Changed: 0  Warnings: 0') {
    return { type: 'NOT_FOUND', message: 'Product Not Found' };
  }
  return result;
};

module.exports = {
  findAll,
  findById,
  createNewProduct,
  reProduct,
};
