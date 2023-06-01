// tests/unit/models/passenger.model.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { allSalesList } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de compras', function () {
  it('Recuperando a lista de compras', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([allSalesList]);
    // Act
    const result = await salesModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(allSalesList);
  });

  it('Recuperando compras a partir do id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([allSalesList[0]]);
    // Act
    const result = await salesModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(allSalesList[0]);
  });

  it('gerando nova compra e retornando saleId', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    // Act
    const result = await salesModel.newSale([{ productId: 1, quantity: 1 }]);
    // Assert
    expect(result).to.be.deep.equal(1);
  });
  afterEach(function () {
    sinon.restore();
  });
});