/*
  This file contains the controller functions for managing products:
  
  - getAllProducts: Fetches all products from the database and returns them as a JSON response.
  - getProductById: Fetches a product based on a custom "id" field (not MongoDB's "_id").

  The functions utilize Mongoose to interact with the database and handle errors gracefully.
*/

const { Product } = require("../models/Product");

// Get all products from the database
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products
    res.status(200).json(products); // Send the products as a response
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

// Get a product by custom "id" field
const getProductById = async (req, res) => {
  try {
    const id = Number(req.params.id); // Convert ID to a number

    console.log("Searching for product with id:", id);

    const product = await Product.findOne({ id }); // Search for numeric id

    if (!product) {
      console.log("No product found with id:", id);
      return res.status(404).json({ message: "Product not found", error: `No product with id: ${id}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product", error: error.message });
  }
};



module.exports = { getAllProducts, getProductById };