const mongoose = require('mongoose');

const venta_schema = new mongoose.Schema({
    cantidad: {
        type: String,
        required: true,
        min: 1
    },
    description: {
        type: String,
        required: true,
        min: 1
    },
    unit_cost: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('venta', venta_schema);