const router = require('express').Router()
const controller = require('../controllers/sightings')
const { model } = require('mongoose')
const Sighting = require('../models/sighting')

router.get('/', controller.getSightings)


router.get('/SawOneLightsOn' , controller.lightsOn)
router.get('/SawOneLightsOff' , controller.lightsOff)
router.get('/reset', controller.reset)
module.exports  = router


