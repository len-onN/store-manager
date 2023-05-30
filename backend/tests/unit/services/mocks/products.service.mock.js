const { allProductsList } = require('../../models/mocks/products.model.mock');

const allProdOk = {
  type: null,
  message: allProductsList,
};

module.exports = {
  allProdOk,
};
