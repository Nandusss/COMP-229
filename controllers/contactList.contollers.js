//reference to model
let contactList = require('../models/contactslist.model');

//exporting model view
module.exports.contactList = function(req, res, next) {
    contactList.find(
        (err, contactList) => {
            //error handling
            if(err) {
                return console.error(err);
            }
            else {
                res.render(
                    'contacts/list', {
                            title: 'Contact List',
                            ContactList: contactList
                    }
                );
            }
        }
    );
}