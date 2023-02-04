const mongoose = require('mongoose');

const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    vendorId:{
        type:String,
        required:true
    },
    restaurantDetails: [
        {

        }
    ],
}, { timestamps: true })

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant



