const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const {
  productsModel,
} = require('../../../src/models');
const { allProductsList } = require('../models/mocks/products.model.mock');

// const {
//   allProdOk,
// } = require('./mocks/products.service.mock');

describe('listagem de produtos', function () {
  it('retorna a lista completa de produtos', async function () {
    // arrange
    sinon.stub(productsModel, 'findAll').resolves(allProductsList);
      
    // act
    const result = await productsService.findAll();

    // assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(allProductsList);
  });
  it('retorna um erro caso receba um ID inválido', async function () {
    // arrange: Especificamente nesse it não temos um arranjo pois nesse fluxo o model não é chamado!

    // act
    const result = await productsService.findById('a');
    
    // assert
    expect(result.type).to.equal('INVALID_VALUE');
    expect(result.message).to.equal('"id" must be a number');
  });

  it('retorna um erro caso o produto não existe', async function () {
    // arrange
    sinon.stub(productsModel, 'findById').resolves(undefined);
   
    // act
    const result = await productsService.findById(999);
    
    // assert
    expect(result.type).to.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.equal('Product not found');
  });
  
  it('retorna o produto caso ID existente', async function () {
    // arrange
    sinon.stub(productsModel, 'findById').resolves(allProductsList[0]);
    
    // act
    const result = await productsService.findById(1);

    // assert
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(allProductsList[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});