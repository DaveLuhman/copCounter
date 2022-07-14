const express = require('express');
const router = express.Router();
const passport = require('passport')

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
module.exports = router;