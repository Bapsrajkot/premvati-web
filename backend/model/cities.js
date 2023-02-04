const mongoose = require("mongoose")
require("dotenv").config()

const schema = mongoose.Schema({
    cityName:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        require:true
    }
})

const cityModel = mongoose.model("cities", schema)

module.exports = { cityModel }