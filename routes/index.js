const router = require('express').Router()

const { model } = require('mongoose')
const Sighting = require('../models/sightingModel')

router.get('/', (req, res) => {
    res.render('index', {layout: 'main'})
 })


router.get('/SawOneLightsOn' , (req , res)=>{
    const sighting = Sighting.create({})
    sighting.lightsOn = true
    sighting.save()
    res.render('dashboard.hbs')
    console.log(`smokey found a bandit`).cyan.underline
    })
    router.get('/SawOneLightsOff' , (req , res)=>{
        const sighting = Sighting.create({})
        sighting.lightsOn = off
        sighting.save()
        res.render('dashboard.hbs')
        console.log(`smokey found a bandit`).cyan.underline
        })

module.exports  = router


