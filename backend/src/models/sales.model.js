const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection
    .execute(
      `SELECT sales.id AS saleId, sales.date AS date,
      sales_products.product_id AS productId,
      sales_products.quantity AS quantity FROM sales
      JOIN sales_products ON sales.id = sales_products.sale_Id
      ORDER BY sales.id ASC`,
    );
  return result;
};

const findById = async (salesId) => {
    const [sale] = await connection.execute(
      `SELECT sl.date, slp.product_id AS productId, slp.quantity FROM sales_products AS slp
      INNER JOIN sales AS sl ON slp.sale_id = sl.id WHERE slp.sale_id = ?
      ORDER BY sale_id, product_id`,
      [salesId],
    );
    return sale;
  };

module.exports = {
  findAll,
  findById,
};