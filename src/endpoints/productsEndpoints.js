const { Router } = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductByID,
  deleteProduct,
} = require("../controllers/products/index");

const product = Router();

product.post("/products", createProduct);
product.get("/products", getAllProducts);
product.get("/products/:id", getProductByID);
product.patch("/products/:id", updateProduct);
product.delete("/products/:id", deleteProduct);

module.exports = { product };
