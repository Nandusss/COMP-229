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

// Edit the values using add_edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    contactList.findById(
        id, (err, itemToEdit) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                //show the edit view
                res.render(
                    'contactlist/add_edit', {
                        title: 'Edit Item', 
                        item: itemToEdit
                    }
                )
            }
        }
    );
}

// perform an update operation on database from edit page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = contactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    contactList.updateOne(
        {_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the contacts list
                res.redirect('/contactlist/list');
            }
        }
    );
}

// Display add_edit page
module.exports.displayAddPage = (req, res, next) => {
    let newItem = contactList();

    res.render(
        'contactlist/add_edit', {
            title: 'Add Item',
            item: newItem
        }
    )          
}

//perform a create function over database
module.exports.processAddPage = (req, res, next) => {
    let newItem = contactList({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    contactList.create(
        newItem, (err, item) =>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the contact list
                console.log(item);
                res.redirect('/contactlist/list');
            }
        }
    );

}

//perform a delete fuction over database
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    contactList.remove(
        {_id: id}, (err) => {
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the contact list
                res.redirect('/contactlist/list');
            }
        }
    );
}