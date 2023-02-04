const {feedbackModel} = require('../model/feedback')
const validate = require('../validation')
exports.add = async (req, res) => {
    
    const error = validate(req.body)
    if (error) {
        return res.status(400).json({error:error.details[0].message});
    }

    const { 
        age,
        gender,
        order,
        qualityfood,
        tasteoffood,
        servingmethod,
        staffbehave,
        cleanliness,
        likedproduct,
        suggestion,
        contactnumber,
        cityId,
        formDate,
        image
    } = req.body
    var userDetails = new feedbackModel({
        age,
        gender,
        order,
        qualityfood,
        tasteoffood,
        servingmethod,
        staffbehave,
        cleanliness,
        likedproduct,
        suggestion,
        contactnumber,
        cityId,
        formDate,
        image
    });
    userDetails.save((err, doc) => {
        if (!err) {
            res.json({data: 'added'}).status(200)
        }
        else {
            console.log('Error during record insertion : ' + err);
        }
    })
}

exports.get = async (req, res) => {
    feedbackModel.find((err, docs) => {
        if (!err) {
            return res.json({data:docs});
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}