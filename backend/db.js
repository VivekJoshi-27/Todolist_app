const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Todoapp");


module.exports = mongoose
