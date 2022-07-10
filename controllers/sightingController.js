const asyncHandler = ('express-async-handler')
const mongoose = require('mongoose')
const Sighting = require('../models/sightingModel')
const controller = {}
controller.getSightings = async (req, res) => {
    const sightings = await Sighting.find()
    res.render('index', {layout: 'main'}).status(200)
    console.log(sightings)
}
controller.insertSighting = async (req, res) => {
    const sighting = await Sighting.create(req.body)
    res.status(201).json(sighting).render('index', {layout: 'main'})
}
controller.lightsOn = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": true })
    res.status(201).render('index').render('index', {layout: 'main'})
}
controller.lightsOff = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": false })
    res.status(201).render('index').render('index', {layout: 'main'})
}

module.exports = controller;