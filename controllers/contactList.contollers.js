//reference to model
let contactList = require('../models/contactList.model');

//get the error message
function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};

//exporting model view
module.exports.contactList = function(req, res, next) {
    contactList.find(
        (err, contactList) => {
            if(err)
            {
                console.error(err);
    
                res.status(400).json(
                    {
                        success: false,
                        message: getErrorMessage(err)
                    }
                )
            }
            else
            {
                res.status(200).json(contactList);            
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
