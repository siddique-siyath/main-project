const Vendor = require('../model/vendor');
var express = require('express');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const store = require('../middleware/multer')

const jwt_decode = require("jwt-decode")


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
            if (vendor.status != false) {
                const isMatch = await bcrypt.compare(vendordata.password, vendor.password)
                console.log('success');
                if (isMatch) {
                    let payload = { subject: vendor._id }
                    let token = jwt.sign(payload, 'secretKey')
                    let userEmail = { subject: vendor.email }
                    let emailId = jwt.sign(userEmail, 'secretKey')

                    if (vendor.field == 'Hotel') {
                        return res.json({ message: 'hotel_logined', token, emailId, status: vendor.verification })
                    } else if (vendor.field == 'restaurant') {
                        return res.json({ message: 'restaurant_logined', token, emailId, status: vendor.verification })
                    } else if (vendor.field == 'car') {
                        return res.json({ message: 'car_logined', token, emailId, status: vendor.verification })
                    } else if (vendor.field == 'guide') {
                        return res.json({ message: 'guide_logined', token, emailId, status: vendor.verification })
                    } else {
                        console.log(err);
                    }

                    // res.status(200)
                    // return res.json({ message: 'logined', token })

                } else {
                    // res.status(401)
                    return res.json({ errMessage: "incorrectPassword" })
                }
            } else {
                return res.json({ errMessage: 'vendorBlocked' })
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


// verify

exports.verify = async (req, res) => {
    let Email = req.query.subject
    console.log(Email);
    try {
        let vendor = await Vendor.findOne({ email: Email })
        if (vendor) {
            console.log(vendor);
            let verify = vendor.verification
            res.json({ verification: verify })
        } else {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err);
    }
}



// add hotel details

exports.add_hotel = async (req, res) => {
    let hotelData = req.body
    console.log(hotelData);
    let data = session.vendorEmail
    console.log('email', data);
    // console.log(req.file.filename);

    Vendor.findOneAndUpdate({ email: hotelData.email }, {
        $set: {
            field: hotelData.type,
            hotelName: hotelData.name,
            location: hotelData.location,
            licenseNumber: hotelData.licenceNumber,
            // image1: req.files[0] && req.files[0].filename ? req.files[0].filename : "",
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
        const vendorData = await Vendor.findOne({ email: data })
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






// add restaurant details

exports.add_restaurant = async (req, res) => {
    let restaurantData = req.body
    console.log(restaurantData);
    let data = session.vendorEmail
    console.log('email', data);
    // console.log(req.file.filename);

    Vendor.findOneAndUpdate({ email: restaurantData.email }, {
        $set: {
            field: restaurantData.type,
            restaurantName: restaurantData.restaurantName,
            location: restaurantData.location,
            licenseNumber: restaurantData.licenceNumber,
            // image1: req.files[0] && req.files[0].filename ? req.files[0].filename : "",
        }
    })
        .then((result) => {
            console.log(result);
            if (result) {
                console.log('f', result);
                res.status(200).json({ message: 'added_restaurant' })

            } else {
                // res.status(401)
                res.json({ errMessage: 'restaurant_error' })
                console.log('restaurant is not added')
            }
        })
        .catch((err) => {
            console.log(err);
        })
}






//  restaurant home page

exports.restaurant_home = async (req, res) => {
    try {
        // let data = session.vendorEmail
        // console.log('email',data);
        let data = req.body.email
        const vendorData = await Vendor.findOne({ email: data })
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






// add car details

exports.add_car = async (req, res) => {
    let carData = req.body
    console.log(carData);
    let data = session.vendorEmail
    console.log('email', data);
    // console.log(req.file.filename);

    Vendor.findOneAndUpdate({ email: carData.email }, {
        $set: {
            field: carData.type,
            carNumber: carData.carNumber,
            location: carData.location,
            licenseNumber: carData.licenceNumber,
            // image1: req.files[0] && req.files[0].filename ? req.files[0].filename : "",
        }
    })
        .then((result) => {
            console.log(result);
            if (result) {
                console.log('f', result);
                res.status(200).json({ message: 'added_car' })

            } else {
                // res.status(401)
                res.json({ errMessage: 'car_error' })
                console.log('car is not added')
            }
        })
        .catch((err) => {
            console.log(err);
        })
}






//  car home page

exports.car_home = async (req, res) => {
    try {
        // let data = session.vendorEmail
        // console.log('email',data);
        let data = req.body.email
        const vendorData = await Vendor.findOne({ email: data })
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








// add guide details

exports.add_guide = async (req, res) => {
    let guideData = req.body
    console.log(guideData);
    let data = session.vendorEmail
    console.log('email', data);
    // console.log(req.file.filename);

    Vendor.findOneAndUpdate({ email: guideData.email }, {
        $set: {
            field: guideData.type,
            adharNumber: guideData.adharNumber,
            location: guideData.location,
            licenseNumber: guideData.licenceNumber,
            // image1: req.files[0] && req.files[0].filename ? req.files[0].filename : "",
        }
    })
        .then((result) => {
            console.log(result);
            if (result) {
                console.log('f', result);
                res.status(200).json({ message: 'added_guide' })

            } else {
                // res.status(401)
                res.json({ errMessage: 'guide_error' })
                console.log('guide is not added')
            }
        })
        .catch((err) => {
            console.log(err);
        })
}






//  guide home page

exports.guide_home = async (req, res) => {
    try {
        // let data = session.vendorEmail
        // console.log('email',data);
        let data = req.body.email
        const vendorData = await Vendor.findOne({ email: data })
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


