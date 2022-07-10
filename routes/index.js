const router = require('express').Router()


router.get('/' , (req , res)=>{
    res.render('index' , { layout: 'main'   , title: 'Home'})
})


router.get('/SawOneLightsOn' , (req , res)=>{
    req.body.lightsOn = true
    })

module.exports  = router


