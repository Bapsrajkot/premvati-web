const express = require("express")
const feedbackRoute = express.Router()
// const upload = require("../../utils/images");
const feedbackController = require('../controller/feedbackController')

feedbackRoute.post('/', feedbackController.add)
feedbackRoute.get('/', feedbackController.get)

module.exports = feedbackRoute