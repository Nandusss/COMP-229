// Exposing the credentials only for academic purposes, Please do not follow this practise in real world functionalities
let dbURI = "mongodb+srv:LSIeKcwTMG0hfwDd//dbuser:@cluster1.m8kzbry.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function() {
    //connecting to the database
    mongoose.connect(dbURI);

    let mongoDB = mongoose.connection;

    mongoDB.once('open', () => {
            console.log('=== Connected To DataBase Successfully ===');
        }
    )
}