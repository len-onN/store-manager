const express = require('express');

const router = express.Router();
const { productsController: {
  listProducts,
  getProduct,
  createNewProduct,
} } = require('../controllers');

router.post('/', createNewProduct);
router.get('/:id', getProduct);
router.get('/', listProducts);

module.exports = router;
