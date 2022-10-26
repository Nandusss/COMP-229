//reference to model
let contactList = require('../models/contactList.model');


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
                    'contactlist/list', {
                            title: 'Contact List',
                            ContactList: contactList
                    }
                );
            }
        }
    );
}

