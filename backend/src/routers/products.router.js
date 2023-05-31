const express = require('express');

const router = express.Router();
const {
  productKey,
  productLenghtName,
} = require('../middlewares/productName.middleware');
const { productsController: {
  listProducts,
  getProduct,
  createNewProduct,
} } = require('../controllers');

router.post('/', productKey, productLenghtName, createNewProduct);
router.get('/:id', getProduct);
router.get('/', listProducts);

module.exports = router;
