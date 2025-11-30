const { default: mongoose } = require("mongoose");


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Provide a title"],
        maxlength: [100, "title cannot be moew than 100 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema)