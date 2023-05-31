const { salesModel } = require('../models');
const schema = require('./validations/validationsInputValues');

const findAll = async () => {
  const salesList = await salesModel.findAll();
  if (!salesList) return { type: 'INTERNAL_ERROR', message: 'Internal Error' };
  return { type: null, message: salesList };
};

const findById = async (saleId) => {
  const error = schema.validateId(saleId);
  if (error.type) return error;

  const sale = await salesModel.findById(saleId);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  return { type: null, message: sale };
};

const newSaleS = async (nSale) => {
  const id = await salesModel.newSale();
  const salePromise = nSale.map((sale) => salesModel
    .salesProductsTb(id, sale.productId, sale.quantity));
  const salePromisee = await Promise.all(salePromise);  
  const obj = {
    id,
    itemsSold: salePromisee,
};

return obj;
};

module.exports = {
  findAll,
  findById,
  newSaleS,
};
