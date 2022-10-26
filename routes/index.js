var express = require('express');
var router = express.Router();

// Controller
let indexController = require('../controllers/index.controllers');

/* GET all necessary pages. */
router.get('/', indexController.home);

router.get('/about', indexController.about);

router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

router.get('/contact', indexController.contact);


module.exports = router;
