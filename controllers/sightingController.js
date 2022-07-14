const asyncHandler = ('express-async-handler')
const mongoose = require('mongoose')
const Sighting = require('../models/sightingModel')
const controller = {}
controller.getSightings = async (req, res) => {
    try {
        const sightings = await Sighting.find().lean()
        const lightsOn = await sightings.filter(sighting => sighting.lightsOn)
        console.log(req.body)
        const lightsOff = await sightings.filter(sighting => !sighting.lightsOn)
        res.status(200).render('index', {layout: 'main', sightings, lightsOn, lightsOff})
    } catch(err) {
        res.status(500).render('index', {layout: 'main', err})
    }}

controller.lightsOn = async (req, res) => {

    const sighting = await Sighting.create({ "lightsOn": true })
    res.status(201).redirect('/')
}
controller.lightsOff = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": false })
    res.status(201).redirect('/')
}

module.exports = controller;