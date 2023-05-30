const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {
    productsListMock,
    // productMock,
    // newProductMock,
  } = require('./mocks/products.controller.mock');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

describe('Listando os produtos - controller', function () {
    it('Deve retornar o status 200 e a lista de produtos', async function () {
      // arrange
      const res = {};
      const req = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAll')
        .resolves({ type: null, message: productsListMock });

      // act
      await productsController.listProducts(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsListMock);
    });
  });