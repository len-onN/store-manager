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

const insertNewProduct = async (product) => {
  const columns = Object.keys((product)).join(', ');
  
  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');
    
  const [{ insertId }] = await connection.execute(
    `INSERT INTO products (${columns}) VALUE (${placeholders})`,
      [...Object.values(product)],
    );
      
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insertNewProduct,
};