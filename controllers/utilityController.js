const asyncHandler = ('express-async-handler')
const mongoose = require('mongoose')
const Sighting = require('../models/sightingModel')
const controller = {}

controller.reset = async (req, res) => {
    Sighting.deleteMany({}, err => {console.log(err)})
    res.redirect('/')
}
module.exports = controller;