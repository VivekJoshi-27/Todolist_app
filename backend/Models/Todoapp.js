const mongoose = require("mongoose")


// create Schema(format) for database//

const todoSchema = new mongoose.Schema({
    taskName:String,
    date:Date,
    category:String

})

module.exports = mongoose.model("todolist", todoSchema);