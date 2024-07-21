const ToDo = require('../models/ToDo');
exports.createToDo = async (req, res) => {
    try {
      const {title,description} = req.body;
      const response = await ToDo.create ({title,description});
      res.status(200).json(
        {   
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });
    } catch (error) {
        console.error(error);
        console.log(error);
      res.status(500).json({ 
        success:false,
        data:"internal Server Error",
        message:error.message
       });
    }
  };