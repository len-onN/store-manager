const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
// const {
//   } = require('./mocks/sales.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

const { productsModel } = require('../../../src/models');

const {
  isMinQuantity,
  isProductId,
  isProductIdValue,
  isQuantity,
} = require('../../../src/middlewares/sales.middleware');
const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');

describe('Testando middlewares do post em sales', function () {
  it('Testando condição para quantity inexistente', async function () {
    // Arrange
    const res = {};
    const req = {
      body: [{
        productId: 1,
      }],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await isQuantity(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
  });
  it('Testando condição para quantity inválida', async function () {
    // Arrange
    const res = {};
    const req = {
      body: [{
        quantity: 0,
        productId: 1,
      }],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await isMinQuantity(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json)
      .to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
  it('Testando condição para productId inexistente', async function () {
    // Arrange
    const res = {};
    const req = {
      body: [{
        quantity: 1,
      }],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    await isProductId(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json)
      .to.have.been.calledWith({ message: '"productId" is required' });
  });
  it('ao enviar productId sem correspondência, retorna mensagem de erro', async function () {
    // Arrange
    const res = {};
    const req = {
      body: [{
        productId: 999,
        quantity: 1,
      }],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsModel, 'findById')
      .resolves(undefined);

      // Act
    await isProductIdValue(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  it('ao enviar dados válidos deve salvar com sucesso!', async function () {
    // Arrange
    const res = {};
    const req = {
      body: [{ productId: 1, quantity: 1 }],
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'newSaleS')
      .resolves({ id: 3, message: [{ productId: 1, quantity: 1 }] });

      // Act
    await salesController.createNewSale(req, res);

    // Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 3, message: [{ productId: 1, quantity: 1 }] });
  });
  afterEach(function () {
    sinon.restore();
  });
});