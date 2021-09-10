const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Guest = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
});

module.exports = mongoose.model('guest', Guest);
