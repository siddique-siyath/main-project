const mongoose = require('mongoose');

const Schema = mongoose.Schema

const HotelSchema = new Schema({
    vendorId:{
        type:String,
        required:true
    },
    hotelDetails: [
        {

        }
    ],
}, { timestamps: true })

const Hotel = mongoose.model('Hotel', HotelSchema);
module.exports = Hotel



