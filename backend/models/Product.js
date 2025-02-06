const mongoose = require('mongoose');

// NodeConfig schema definition
const nodeConfigSchema = new mongoose.Schema({
  software: {
    type: String,
    enum: ['Dappnode', 'Stereum', 'Sege', 'Coincashew', 'Blockops'],
    required: true,
  },
  ram: {
    type: String,
    enum: ['16GB', '32GB', '64GB'],
    required: true,
  },
  storage: {
    type: String,
    enum: ['2TB SSD', '4TB SSD'],
    required: true,
  },
  processor: {
    type: String,
    enum: ['Intel i3', 'Intel i5', 'Intel i7'],
    required: true,
  },
});

// ShipmentFormData schema definition
const shipmentFormDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

// Product schema definition
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  basePrice: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  specs: {
    defaultRam: {
      type: String,
      enum: ['16GB', '32GB', '64GB'],
      required: true,
    },
    defaultStorage: {
      type: String,
      enum: ['2TB SSD', '4TB SSD'],
      required: true,
    },
    defaultProcessor: {
      type: String,
      enum: ['Intel i3', 'Intel i5', 'Intel i7'],
      required: true,
    },
  },
  shipmentDetails: shipmentFormDataSchema, // Embedding shipment details
  nodeConfig: nodeConfigSchema, // Embedding node config details
});

// CartItem schema definition (referencing Product and NodeConfig)
const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  config: nodeConfigSchema, // Using the same nodeConfig schema
  totalPrice: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema, 'products');
// const CartItem = mongoose.model('CartItem', cartItemSchema, 'cartItems');

module.exports = { Product };
