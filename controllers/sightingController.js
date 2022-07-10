const asyncHandler = ('express-async-handler')
const mongoose = require('mongoose')
const Sighting = require('../models/sightingModel')
const controller = {}
controller.getSightings = async (req, res) => {
    try {
        const sightings = await Sighting.find()
        res.status(200).render('index', {layout: 'main', sightings})
    } catch(err) {
        res.status(500).render('index', {layout: 'main', err})
    }}
    
controller.insertSighting = async (req, res) => {
    const sighting = await Sighting.create(req.body)
    res.status(201).render('index', {layout: 'main'})
}
controller.lightsOn = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": true })
    res.status(201).render('index')
}
controller.lightsOff = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": false })
    res.status(201).render('index')
}

module.exports = controller;