const router = require('express').Router()
const controller = require('../controllers/sightingController')
const { model } = require('mongoose')
const Sighting = require('../models/sightingModel')

router.get('/', controller.getSightings, (req, res) => {
    res.render('index', {layout: 'main'})
 })


router.get('/SawOneLightsOn' , controller.lightsOn)
router.get('/SawOneLightsOff' , controller.lightsOff)

module.exports  = router


