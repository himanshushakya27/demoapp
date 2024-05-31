const fileSchema = require("./uploadSchema");

const fileService = {
  addFile: async (body) => {
    try {

      return await new fileSchema(body).save();

    } catch (error) {
      return error;
    }
  },

};

module.exports = fileService;
