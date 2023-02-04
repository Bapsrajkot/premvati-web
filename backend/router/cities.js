const express = require("express")
const citiesRoute = express.Router()
// const upload = require("../../utils/images");
const citiesController = require('../controller/citiesController')

citiesRoute.post('/add_city', citiesController.add)
citiesRoute.get('/get_city', citiesController.get)

module.exports = citiesRoute