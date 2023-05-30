const express = require('express');

const router = express.Router();
const { productsController: {
  listProducts,
  getProduct,
} } = require('../controllers');

router.get('/:id', getProduct);
router.get('/', listProducts);

module.exports = router;
