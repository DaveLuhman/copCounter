const passport = require('passport')
const router = require('express').Router()
const controller = require('../controllers/auth')
const { model } = require('mongoose')
const user = require('../models/user')

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//@desc google auth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
 (req,res) => {res.redirect('/')
})

//@desc Logout User
//@route /auth/logout
router.get('/logout', (req, res) => {
    res.logout()
    res.redirect('/login')
})

//@desc get request for LoginPage
//@route /auth/
router.get('/', controller.getLoginPage)

router.get('/register', controller.getRegisterPage)
router.post('/submitRegistration', controller.submitRegistration)

module.exports = router;