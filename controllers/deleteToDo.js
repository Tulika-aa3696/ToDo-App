// controllers/deleteToDo.js
const ToDo = require('../models/ToDo');

// Delete a To-Do item by ID
exports.deleteToDo = async (req, res) => {
  try {
    const id = req.params.id; // Get the ID from request parameters

    const todo = await ToDo.findByIdAndDelete(id); // Find the To-Do item by ID and delete it

    if (!todo) {
      return res.status(404).json({
        success: false,
        data: "Not Found",
        message: "To-Do item not found"
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "To-Do item deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: error.message
    });
  }
};
