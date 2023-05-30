const express = require('express');

const router = express.Router();
const { salesController: {
  listSales,
  getSale,
} } = require('../controllers');

router.get('/:id', getSale);
router.get('/', listSales);

module.exports = router;
