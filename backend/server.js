/*
  This is an Express.js server setup for handling product, order, and payment-related routes.
  It loads environment variables using the 'dotenv' package, connects to a MongoDB database, 
  and uses CORS and body-parser middleware. The server exposes APIs for products, orders, 
  and payment routes with the base URL '/api'. 

  The following libraries are utilized:
  - dotenv: For loading environment variables from a .env file
  - express: For setting up the server and defining routes
  - body-parser: For parsing incoming request bodies
  - cors: For handling cross-origin requests
  - mongoose: For interacting with MongoDB
*/

const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config({ path: './process.env' }); // Load environment variables from the specified file

const express = require("express"); // Import Express.js to create the server
const productRoutes = require("./routes/productRoutes"); // Import product routes to handle product-related API requests
const orderRoutes = require("./routes/orderRoutes"); // Import order routes to handle order-related API requests

const app = express(); // Create an instance of an Express app

app.use(express.json()); // Middleware to parse incoming JSON bodies

const cors = require("cors"); // Import CORS to handle cross-origin resource sharing
const bodyParser = require("body-parser"); // Import body-parser to parse request bodies (body-parser is mostly deprecated, but still useful for certain setups)

// Database connection setup
require('./config/database');  // Import the database configuration to connect to MongoDB

// Use the product and order routes with '/api' prefix for clean route structure
app.use("/api", productRoutes); // All product-related routes will be prefixed with /api
app.use("/api", orderRoutes); // All order-related routes will also be prefixed with /api

// Setup middleware for handling CORS (cross-origin requests)
app.use(cors()); 

// Setup middleware to parse JSON data in request bodies
app.use(bodyParser.json()); // Parse incoming JSON data in the request body

// Import and use the payment routes for handling payment-related API requests
const paymentRouter = require('./routes/paymentRoutes'); // Import payment routes
app.use('/api', paymentRouter); // Prefix payment routes with /api

// Add a root route to handle GET requests to "/"
app.get('/', (req, res) => {
  res.send("Welcome to the API. Server is running successfully!");
});

const port = process.env.PORT || 3000; // Ensure a default port if not set in the environment variables
app.listen(port, () => { // Start the server and listen on the specified port
  console.log(`Server running on http://localhost:${port}`); // Log a message indicating the server is running
});
