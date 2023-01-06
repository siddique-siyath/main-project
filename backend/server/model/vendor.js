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
    carNumber:{
        type:String,
    },
    restaurantName:{
        type : String,
    },
    adharNumber:{
        type : String,
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
    },
    image1:{
        type:String
    }

}, { timestamps: true })

const Vendor = mongoose.model('Vendor', VendorSchema);
module.exports = Vendor



