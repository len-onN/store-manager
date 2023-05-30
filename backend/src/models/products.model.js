const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection
    .execute('SELECT * FROM products ORDER BY id asc');
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
      'SELECT * FROM products WHERE id = ? ORDER BY id asc',
      [productId],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
};