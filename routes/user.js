let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

router.get('/', usersController.renderSignin);

router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/signout', usersController.signout);

module.exports = router;