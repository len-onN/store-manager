const express = require('express');

const router = express.Router();
const { salesController: {
  listSales,
  getSale,
  createNewSale,
} } = require('../controllers');
const {
  isProductId,
  isQuantity,
  isMinQuantity,
  isProductIdValue,
} = require('../middlewares/sales.middleware');

router.get('/:id', getSale);
router.get('/', listSales);
router.post('/', isProductId, isProductIdValue, isMinQuantity, isQuantity, createNewSale);

module.exports = router;
