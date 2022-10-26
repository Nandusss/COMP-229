var express = require('express');
var router = express.Router();

// Controller
let contactListController = require('../controllers/contactList.contollers');


/* GET all necessary pages. */
router.get('/', contactListController.contactList);

router.get('/list', contactListController.contactList);

module.exports = router;