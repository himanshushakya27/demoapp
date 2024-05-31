const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({

    originalName: {
        type: String,
       
    },
    fileName: {
        type: String,
    
    },
    path: {
        type: String,
     
    },

}, { timestamps: true }); 

const schema = mongoose.model("file", fileSchema); 

module.exports = schema;
