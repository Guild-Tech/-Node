/*
  This file contains the controller function for fetching all products:
  - getAllProducts: Retrieves all products from the database and sends them as a response.
  
  The function uses Mongoose's `.find()` method to fetch the products and handle the response or errors.
  If successful, it logs the products to the console and returns them with a 200 status code. If there is an error,
  it logs the error and sends a 500 status code with an error message.
*/

const { Product } = require("../models/Product"); // Ensure correct import of the Product model

// Get all products from the database
const getAllProducts = async (req, res) => {
  Product.find({})  // Fetch all products from the 'Product' collection
    .then(products => {
      res.status(200).json(products);  // Send the products in the response with a 200 status code
    })
    .catch(err => {
      console.error('Error fetching products:', err);  // Log any error that occurs while fetching products
      res.status(500).json({ message: 'Error fetching products', error: err });  // Send a 500 status code and the error message
    });
};

module.exports = { getAllProducts };  // Export the getAllProducts function to be used in routes
