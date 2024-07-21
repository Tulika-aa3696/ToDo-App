const ToDo = require('../models/ToDo');

// Get all To-Do items
exports.getToDo = async (req, res) => {
  try {
    const todos = await ToDo.find(); // Fetch all To-Do items from the database
    res.status(200).json({
      success: true,
      data: todos,
      message: "To-Do items fetched successfully"
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

// Get a single To-Do item by ID
exports.getToDoById = async (req, res) => {
  try {
    const id = req.params.id; // Get the ID from request parameters

    const todo = await ToDo.findById({_id: id}); // Find the To-Do item by ID

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
      message: "To-Do item fetched successfully"
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
