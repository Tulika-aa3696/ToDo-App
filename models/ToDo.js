// models/ToDo.js
const mongoose = require('mongoose');

// Define the schema for a ToDo item
const toDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

// Create the model using the schema
const ToDo = mongoose.model('ToDo', toDoSchema);

// Export the model
module.exports = ToDo;
