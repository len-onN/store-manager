const allProductsList = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const oneProduct = {
  id: 1,
  name: 'Martelo de Thor',
};

const allSalesList = [
  {
    saleId: 1,
    date: '2023-05-30T18:05:10.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-05-30T18:05:10.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-05-30T18:05:10.000Z',
    productId: 3,
    quantity: 15,
  },
];

module.exports = { allProductsList, oneProduct, allSalesList };