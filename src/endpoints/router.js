const { Router } = require("express");
const { product } = require("./productsEndpoints");

const router = Router();

router.use(product);

module.exports = { router };
