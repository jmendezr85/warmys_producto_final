const mongoose = require('mongoose');

const registro_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1
    },
    email: {
        type: String,
        required: true,
        min: 1
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('registros', registro_schema);