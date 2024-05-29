const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  }

})

const schema = mongoose.model("user",userSchema);

module.exports = schema;