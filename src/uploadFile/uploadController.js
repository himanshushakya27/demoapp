const fileService = require("./uploadService");

const taskController = {
  addFile: async (req, res) => {
    try {
      const body = {
        originalName: req.file.originalname,
        fileName: req.file.filename,
        path: req.file.path 
      };
    
        const result = await fileService.addFile(body);

        return res.status(201).json({
          data: result,
          success: true,
          message: "File added successfully",
        });

    }
    catch (error) 
    {
      console.log(error)
      return res.status(400).json({
        data: error,
        success: false,
        message: "Failed to add file",
      });
    }
  },

};

module.exports = taskController;
