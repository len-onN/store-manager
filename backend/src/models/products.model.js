const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection
    .execute('SELECT * FROM products ORDER BY id asc');
  return result;
};

module.exports = { findAll };