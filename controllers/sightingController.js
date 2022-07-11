const asyncHandler = ('express-async-handler')
const mongoose = require('mongoose')
const Sighting = require('../models/sightingModel')
const controller = {}
controller.getSightings = async (req, res) => {
    try {
        const sightings = await Sighting.find().lean()
        const lightsOn = await sightings.filter(sighting => sighting.lightsOn)
        console.log(lightsOn)
        const lightsOff = await sightings.filter(sighting => !sighting.lightsOn)
        console.log(lightsOff)
        res.status(200).render('index', {layout: 'main', sightings, lightsOn, lightsOff})
    } catch(err) {
        res.status(500).render('index', {layout: 'main', err})
    }}

controller.insertSighting = async (req, res) => {
    const sighting = await Sighting.create(req.body)
    res.status(201).render('index', {layout: 'main'})
}
controller.lightsOn = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": true })
    res.status(201).redirect('/')
}
controller.lightsOff = async (req, res) => {
    const sighting = await Sighting.create({ "lightsOn": false })
    res.status(201).redirect('/')
}

module.exports = controller;