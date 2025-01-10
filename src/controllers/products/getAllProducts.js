const fs = require("node:fs/promises");

const getAllProducts = async (req, res) => {
  try {
    const database = await fs.readFile("./src/database/database.json");

    const inventory = await JSON.parse(database);
    if (inventory.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum produto encontrado." });
    }
    return res.status(200).json(inventory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts };
