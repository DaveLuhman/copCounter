const router = require('express').Router()
const controller = require('../controllers/sightingController')
const utilityController = require('../controllers/utilityController')
const { model } = require('mongoose')
const Sighting = require('../models/sightingModel')

router.get('/', controller.getSightings)


router.post('/SawOneLightsOn' , controller.lightsOn)
router.post('/SawOneLightsOff' , controller.lightsOff)
router.get('/reset', utilityController.reset)
module.exports  = router


