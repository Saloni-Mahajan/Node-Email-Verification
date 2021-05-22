const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

//Login Route
router.get('/login', (req, res) => res.render('login'));

//Forgot Password Route
router.get('/forgot', (req, res) => res.render('forgot'));

//Reset Password Route
router.get('/reset/:id', (req, res) => {
    // console.log(id)
    res.render('reset', { id: req.params.id })
});

//Register Route
router.get('/register', (req, res) => res.render('register'));

//  Handle Register POST
router.post('/register', authController.registerHandle);

//  Handle Email ACTIVATE
router.get('/activate/:token', authController.activateHandle);

//  Handle Forgot Password
router.post('/forgot', authController.forgotPassword);

//  Handle Reset Password
router.post('/reset/:id', authController.resetPassword);

//  Handle Reset Password
router.get('/forgot/:token', authController.gotoReset);

//  Handle Login POST
router.post('/login', authController.loginHandle);

//  Handle Logout GET
router.get('/logout', authController.logoutHandle);

module.exports = router;