const fs = require("node:fs/promises");

const getProductByID = async (req, res) => {
  try {
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

    return res.status(200).json(registeredProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductByID,
};
