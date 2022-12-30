const mongoose = require('mongoose');

const Schema = mongoose.Schema

const VendorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: Boolean
    },
    verification: {
        type: Boolean
    },
    field: {
        type: String,
        // required: true
    },
    hotelName: {
        type: String,
        // required: true
    },
    location: {
        type: String,
        // required: true
    },
    licenseNumber: {
        type: String,
        // required: true
    },
    licensePhoto: {
        type: String,
        // required: true
    }

}, { timestamps: true })

const Vendor = mongoose.model('Vendor', VendorSchema);
module.exports = Vendor



