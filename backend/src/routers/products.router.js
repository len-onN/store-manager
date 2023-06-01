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
  reProduct,
} } = require('../controllers');

router.post('/', productKey, productLenghtName, createNewProduct);
router.get('/:id', getProduct);
router.get('/', listProducts);
router.put('/:id', productKey, productLenghtName, reProduct);

module.exports = router;
