const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { now } = require('mongoose')
const controller = {}

controller.getLoginPage = async (req, res, next) => {
    res.render('login', {layout: 'login'})
}
controller.getRegisterPage = async (req, res, next) => {
    res.render('register', {layout: 'login'})
}
controller.submitRegistration = async (req, res, next) => {
    const user = req.body.username
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    try {
        if(!user) throw err;
        if(!req.body.password) throw err;
        User.create({username: user, passwordHash: passwordHash, createdAt: now()})
        res.render('registerSuccess', {layout: 'guest'}).status(201)
    } catch (err) {
        console.log(err)
    }

}
controller.submitLogin = async (req, res, next) => {
    if(!req.body.user || !req.body.password) throw err;
      try {
        const user = User.findOne({username: req.body.username})
        if(bcrypt.compareSync(req.body.password, user.passwordHash))

    } catch (error) {

    }
}


module.exports = controller