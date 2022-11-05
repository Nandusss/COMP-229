/* *
 * index.js
 * Nandagopan Dilip
 * 301166925
 * 29/10/2022
 */

var express = require('express');
var router = express.Router();

// Controller
let indexController = require('../controllers/index.controllers');

/* GET all necessary pages. */
router.get('/', indexController.home);

module.exports = router;
