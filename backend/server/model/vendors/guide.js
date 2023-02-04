const mongoose = require('mongoose');

const Schema = mongoose.Schema

const GuideSchema = new Schema({
    vendorId:{
        type:String,
        required:true
    },
    guideDetails: [
        {

        }
    ],
}, { timestamps: true })

const Guide = mongoose.model('Guide', GuideSchema);
module.exports = Guide



