// tests/unit/models/passenger.model.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { allProductsList } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  it('Recuperando a lista de produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([allProductsList]);
    // Act
    const result = await productsModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(allProductsList);
  });

  it('Recuperando uma pessoa passageira a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[allProductsList[0]]]);
    // Act
    const result = await productsModel.findById(1);
    // Assert
    expect(result).to.be.deep.equal(allProductsList[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});