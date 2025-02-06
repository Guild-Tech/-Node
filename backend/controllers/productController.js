const { Product } = require("../models/Product"); // Ensure correct import

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Using find as a promise
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
};

module.exports = { getAllProducts };
