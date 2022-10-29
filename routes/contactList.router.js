/* *
 * contactList.router.js
 * Nandagopan Dilip
 * 301166925
 * 29/10/2022
 */

var express = require('express');
var router = express.Router();


function requireAuth(req, res, next)
{
    // checking if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/user/signin');
    }
    next();
}

// Controller
let contactListController = require('../controllers/contactList.contollers');


/* GET all the contact list */
router.get('/', contactListController.contactList);
router.get('/list', contactListController.contactList);

// Routers for edit contact
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);
router.post('/edit/:id', requireAuth, contactListController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactListController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, contactListController.performDelete);


module.exports = router;