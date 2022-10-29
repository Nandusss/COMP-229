//reference to model
let contactList = require('../models/contactList.model');
let sorter = require('../public/javascripts/sorter');

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
                            ContactList: contactList,
                            sorter : sorter,
                            userName: req.user ? req.user.username : ''
                    }
                );
            }
        }
    );
}

// Display the  add_edit page. Only provide access if signed in
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
                console.log(req.user);
                //show the edit view
                res.render(
                    'contactlist/add_edit', {
                        title: 'Edit Item', 
                        item: itemToEdit,
                        userName: req.user ? req.user.username : ''
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

// Display add_edit page. Only access if signed in
module.exports.displayAddPage = (req, res, next) => {
    let newItem = contactList();

    console.log(req.user);
    //show the edit view
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

//perform a delete fuction over database if user is signed in
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
