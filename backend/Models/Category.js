const mongoose = require("mongoose")


// create Schema(format) for database//

const cateSchema = new mongoose.Schema({
    cateName:String

})

module.exports = mongoose.model("category", cateSchema);