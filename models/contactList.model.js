/**
 * Creating contact list db model
 */
let mongoose = require('mongoose');

//model shema
let contactListModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String
    },
    {
        collection: "ContactList"
    }
);

module.exports = mongoose.model('contactlist', contactListModel);