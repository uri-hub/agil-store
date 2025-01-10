const fs = require("fs/promises");

const updateProduct = async (req, res) => {
  try {
    const { inStock, price } = req.body;
    const { id } = req.params;

    const database = await fs.readFile("./src/database/database.json");

    const inventory = await JSON.parse(database);

    const productIndex = inventory.inventory.findIndex(
      (product) => product.id === id
    );

    if (productIndex === -1) {
      return res.status(404).json({ message: "Produto não cadastrado" });
    }

    const registeredProduct = inventory.inventory[productIndex];

    if (inStock !== undefined && typeof inStock === "number") {
      registeredProduct.inStock = inStock;
    }

    if (price !== undefined && typeof price === "number") {
      registeredProduct.price = price;
    }

    await fs.writeFile(
      "./src/database/database.json",
      JSON.stringify(inventory, null, 2)
    );

    return res.status(201).json(registeredProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { updateProduct };
