const { randomUUID } = require("node:crypto");
const fs = require("node:fs/promises");

const createProduct = async (req, res) => {
  try {
    const { productName, category, inStock, price } = req.body;
    const id = randomUUID();

    if (!productName || !category || !inStock || !price) {
      return res.status(400).json({
        mensagem:
          "Nome do produto, categoria, quantidade em estoque e preço devem ser informados ao cadastrar um novo produto.",
      });
    }

    const product = { id, productName, category, inStock, price };

    const database = await fs.readFile("./src/database/database.json");

    const inventory = await JSON.parse(database);

    inventory.inventory.push(product);

    await fs.writeFile(
      "./src/database/database.json",
      JSON.stringify(inventory)
    );

    return res.status(201).json({ product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct };
