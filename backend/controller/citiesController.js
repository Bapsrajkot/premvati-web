const {cityModel} = require('../model/cities')

exports.add = async (req, res) => {
    const { 
        cityName,
        id
    } = req.body
    var userDetails = new cityModel({
        cityName,
        id
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
    cityModel.find((err, docs) => {
        if (!err) {
            return res.json({data:docs});
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}