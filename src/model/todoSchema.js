const { default: mongoose } = require("mongoose");


const todoSchema = new mongoose.Schema({
    title : { 
        type : String,
        require : [true , "Please Provide a title"]
     }
})