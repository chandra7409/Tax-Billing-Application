const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connection requested");
    return mongoose.connect('mongodb://localhost/Tax-Billing');
}

module.exports = {
    connect
}