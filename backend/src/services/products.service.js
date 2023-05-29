const { productsModel } = require('../models');

const findAll = async () => {
  const productsList = await productsModel.findAll();
  if (!productsList) return { type: 'INTERNAL_ERROR', message: 'Internal Error' };
  return { type: null, message: productsList };
};

module.exports = { findAll };
