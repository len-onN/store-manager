const { productsModel } = require('../models');

const isProductId = (req, res, next) => {
  const sales = req.body;
  const productIdKey = sales.every((sale) => sale.productId);
  if (!productIdKey) return res.status(400).json({ message: '"productId" is required' });
  next();
};

const isQuantity = (req, res, next) => {
  const sales = req.body;
  const quantityKey = sales.every((sale) => sale.quantity);
  if (!quantityKey) return res.status(400).json({ message: '"quantity" is required' });
  next();
};

const isMinQuantity = (req, res, next) => {
  const sales = req.body;
  if (sales.some((sale) => sale.quantity <= 0)) {
    return res.status(422).json({
      message: '"quantity" must be greater than or equal to 1',
    }); 
  }
  next();
};

const isProductIdValue = async (req, res, next) => {
   const sales = req.body;
   const promisePIds = await Promise.all(sales.map(({ productId }) => {
    const conclusion = productsModel.findById(productId);
    return conclusion;
   }));
   const prod = promisePIds.every((pId) => pId);
   if (!prod) return res.status(404).json({ message: 'Product not found' });
   next();
};

module.exports = {
  isProductId,
  isQuantity,
  isMinQuantity,
  isProductIdValue,
};