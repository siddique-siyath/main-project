const Vendor = require('../model/vendor');
var express = require('express');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const store = require('../middleware/multer')


var session = express('session')

let message;
let errMessage;


exports.data = (req, res) => {
    res.send('data success')
    console.log('data');
}



//  vendor signup

exports.vendor_signup = async (req, res) => {
    let vendorData = req.body
    console.log(vendorData);

    let vendor = new Vendor(vendorData)

    const hashedpassword = await bcrypt.hash(vendor.password, 12);
    vendor.password = hashedpassword;
    vendor.status = true;
    vendor.verification = false;
    // vendor.licensePhoto = req.files[0] && req.files[0].filename ? req.files[0].filename : "",

    Vendor.findOne({ email: vendor.email })
        .then((result) => {

            if (result) {
                // res.status(401)
                res.json({ errMessage: 'already exist' })
                console.log('this email is already used')
            } else {
                console.log('save', vendor);
                vendor.save()
                    .then((result) => {
                        session.vendorEmail = vendor.email;
                        console.log('f', result);
                        res.status(200).json({ message: 'signup' })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })
}


// vendor login

exports.vendor_login = async (req, res) => {
    let vendordata = req.body
    console.log(vendordata);

    try {
        const vendor = await Vendor.findOne({ email: vendordata.email })
        if (vendor) {
            const isMatch = await bcrypt.compare(vendordata.password, vendor.password)
            console.log('success');
            if (isMatch) {
                 let payload = { subject : vendor._id }
                let token = jwt.sign(payload, 'secretKey')
                // res.status(200)
                return res.json({ message: 'logined', token })
            } else {
                // res.status(401)
                return res.json({ errMessage: "incorrectPassword" })
            }
        } else {
            // res.status(401)
            return res.json({ errMessage: 'incorrectEmail' })
        }
    }

    catch (err) {
        console.log(err.message);
    }

}


// add hotel details

exports.add_hotel = async (req, res) => {
    let hotelData = req.body
    console.log(hotelData);
    let data = session.vendorEmail
    console.log('email',data);
    // console.log(req.file.filename);

        Vendor.findOneAndUpdate({ email: hotelData.email }, {
            $set: {
                field: hotelData.type,
                hotelName: hotelData.name,
                location: hotelData.location,
                licenseNumber: hotelData.licenceNumber,
                // licensePhoto: req.file && req.file.filename ? req.file.filename : ""
            }
        })
            .then((result) => {
                console.log(result);
                if (result) {
                    console.log('f', result);
                    res.status(200).json({ message: 'added_hotel' })

                } else {
                    // res.status(401)
                    res.json({ errMessage: 'hotel_error' })
                    console.log('hotel is not added')
                }
            })
            .catch((err) => {
                console.log(err);
            })
}



//  hotel home page

exports.hotel_home = async (req, res) => {
    try {
        // let data = session.vendorEmail
        // console.log('email',data);
        let data = req.body.email
        const vendorData = await Vendor.findOne({email:data})
        .then((result) => {
            if (result) {
                console.log(result);
                res.send(result);
               let status = result.email
                console.log(status)
                // res.json({ status })
            } else {
                console.log('error');
                res.status(401)
            }
        })
        
    }
    catch (err) {
        console.log(err.message);
    }
}
