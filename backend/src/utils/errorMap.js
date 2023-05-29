const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  SALES_NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  // _NOT_FOUND: 404,
  // _CONFLICT: 409,
};
  
const mapError = (type) => errorMap[type] || 500;
  
module.exports = {
  errorMap,
  mapError,
};