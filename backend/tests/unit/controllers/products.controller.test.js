const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const {
    productsListMock,
    productMock,
    newProductMock,
  } = require('./mocks/products.controller.mock');

const {
  productKey,
  productLenghtName,
} = require('../../../src/middlewares/productName.middleware');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

describe('Listando e inserindo produtos - controller', function () {
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
    it('ao enviar dados válidos deve salvar com sucesso!', async function () {
      // Arrange
      const res = {};
      const req = {
        body: productMock,
      };
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'createNewProduct')
        .resolves({ type: null, message: newProductMock });
  
        // Act
      await productsController
        .createNewProduct(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProductMock);
    });
    it('ao enviar objeto sem chave name retorna erro', async function () {
      // Arrange
      const res = {};
      const req = {
        body: { notAName: 'No Name Here' },
      };
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      await productKey(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    });
    it('ao enviar name com menos que 5 caracteres retorna erro', async function () {
      // Arrange
      const res = {};
      const req = {
        body: { name: 'sad' },
      };
  
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      
      await productLenghtName(req, res);
  
      // Assert
      expect(res.status).to.have.been.calledWith(422);
      expect(res.json).to.have.been.calledWith({
        message: '"name" length must be at least 5 characters long' });
    });

    it('Ao atualizar produto retorna o status 200 e o produto', async function () {
      // arrange
      const res = {};
      const req = {
        body: { name: 'nameok' },
        params: 1,
      };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findById')
        .resolves({ type: null, message: { id: 1, name: 'nameok' } });
      sinon
        .stub(productsService, 'reProduct')
        .resolves();
      // act
      await productsController.reProduct(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith({ id: 1, name: 'nameok' });
    });

    it('Ao atualizar produto inexistente retorna status 400 e mensagem', async function () {
      // arrange
      const res = {};
      const req = {
        body: { name: 'nameok' },
        params: 999,
      };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
      sinon
        .stub(productsService, 'reProduct')
        .resolves();
      // act
      await productsController.reProduct(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
    
    afterEach(function () {
      sinon.restore();
    });
  });