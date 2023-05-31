const express = require('express');

const router = express.Router();
const { salesController: {
  listSales,
  getSale,
  createNewSale,
} } = require('../controllers');

router.get('/:id', getSale);
router.get('/', listSales);
router.post('/', createNewSale);

module.exports = router;
