const mongoose = require("mongoose")
require("dotenv").config()

const schema = mongoose.Schema({
    age: {
        type:String,require:true
    },
    gender:  {
        type:String,require:true
    },
    order:  {
        type:String,require:true
    },
    qualityfood:  {
        type:String,require:true
    },
    tasteoffood:  {
        type:String,require:true
    },
    servingmethod:  {
        type:String,require:true
    },
    staffbehave: String,
    cleanliness: String,
    likedproduct: String,
    suggestion: String,
    contactnumber: String,
    formDate: String,
    // image:{
    //     avatar: {
    //         type: String
    //     },
    //     cloudinary_id: {
    //         type: String
    //     }
    // },
    image: String,
    cityId: String
})


const feedbackModel = mongoose.model("feedback", schema)

module.exports = { feedbackModel }