const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CarSchema = new Schema({
    vendorId:{
        type:String,
        required:true
    },
    carDetails: [
        {

        }
    ],
}, { timestamps: true })

const Car = mongoose.model('Car', CarSchema);
module.exports = Car



