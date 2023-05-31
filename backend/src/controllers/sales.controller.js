const { salesService } = require('../services');
const errorMap = require('../utils/errorMap');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const createNewSale = async (req, res) => {
  const nSale = req.body;
  const result = await salesService.newSaleS(nSale);
  // if (resultado.message) return res.status(422).json(resultado);
  res.status(201).json(result);
};

module.exports = {
  listSales,
  getSale,
  createNewSale,
};