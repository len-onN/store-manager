const { productsService } = require('../services');
const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  
  const { type, message } = await productsService.createNewProduct(name);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(201).json(message);
};

const reProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await productsService.reProduct(id, name);
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  createNewProduct,
  reProduct,
};