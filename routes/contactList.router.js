var express = require('express');
var router = express.Router();

// Controller
let contactListController = require('../controllers/contactList.contollers');


/* GET all the contact list */
router.get('/', contactListController.contactList);
router.get('/list', contactListController.contactList);

// Routers for edit contact
router.get('/edit/:id', contactListController.displayEditPage);
router.post('/edit/:id', contactListController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactListController.processAddPage);


// Route for Delete
router.get('/delete/:id', contactListController.performDelete);


module.exports = router;