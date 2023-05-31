const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  SALE_NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  'string.min': 422,
  'any.requires': 422,
  // _NOT_FOUND: 404,
  // _CONFLICT: 409,
};
  
const mapError = (type) => errorMap[type] || 500;
  
module.exports = {
  errorMap,
  mapError,
};