const { createProduct } = require("./createProducts");
const { deleteProduct } = require("./deleteProducts");
const { getAllProducts } = require("./getAllProducts");
const { getProductByID } = require("./getProductsById");

const { updateProduct } = require("./updateProducts");

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductByID,
  deleteProduct,
};
