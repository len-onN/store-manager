const express = require('express');

const router = express.Router();
const { productsController: { listProducts } } = require('../controllers');

router.get('/', listProducts);

module.exports = router;
