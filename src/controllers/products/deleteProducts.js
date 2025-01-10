const fs = require("node:fs/promises");

const deleteProduct = async (req, res) => {
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

    inventory.inventory.splice(productIndex, 1);

    await fs.writeFile(
      "./src/database/database.json",
      JSON.stringify(inventory)
    );

    return res.status(200).json(inventory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteProduct };
