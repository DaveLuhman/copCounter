const router = require('express').Router()

const { model } = require('mongoose')
const Sighting = require('../models/sightingModel')

router.get('/', (req, res) => {
    res.render('index', {layout: 'main'})
 })


router.get('/SawOneLightsOn' , (req , res)=>{
    const sighting = Sighting.create({})
    sighting.lightsOn = true
    res.render('index.hbs')
    console.log(`smokey found a bandit`)
    })
    router.get('/SawOneLightsOff' , (req , res)=>{
        const sighting = Sighting.create({})
        sighting.lightsOn = off
        res.render('index.hbs')
        console.log(`smokey found a bandit`)
        })

module.exports  = router


