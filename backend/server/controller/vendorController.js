const Vendor = require('../model/vendor');
const Hotel = require('../model/vendors/hotel')
const Restaurant = require('../model/vendors/restaurant')
const Car = require('../model/vendors/car')
const Guide = require('../model/vendors/guide')

let express = require('express');

const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

// const store = require('../middleware/multer')

const jwt_decode = require("jwt-decode");
const e = require('express');

let session = express('session')

let message;
let errMessage;



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



// hotel_add_services

exports.hotel_add_services = async (req, res) => {
    let services = await req.body.service
    let hotelEmail = req.body.email
    console.log(services);
    console.log(hotelEmail);

    try {
        hotelEmail = jwt_decode(hotelEmail)
        console.log(hotelEmail.subject);

        const hotel = await Hotel.findOne({ vendorId: hotelEmail.subject })
        if (hotel) {
            Hotel.updateOne(
                { vendorId: hotelEmail.subject },
                {
                    $push: {
                        hotelDetails: services
                    }
                })
                .then((result) => {
                    console.log('haii');
                    if (result) {
                        console.log('result = ', result);
                        res.json({ message: 'Data_Added' })
                    } else {
                        console.log(err);
                        res.status(400)
                    }
                })

        } else {
            const hotel = Hotel.create({ vendorId: hotelEmail.subject, hotelDetails: services })
            if (hotel) {
                console.log('result = ', hotel);
                // res.status(200)
                res.json({ message: 'Data_Added' })
            } else {
                console.log(err);
                res.status(400)
            }
        }

    }
    catch (err) {
        console.log(err);
    }
}





// hotel_edit_services

exports.hotel_edit_services = async (req, res) => {
    console.log('edit');
    console.log(req.body);
    try {
        let id = req.body.id
        let email = jwt_decode(req.body.email);
        email = email.subject;
        let data = req.body.data
        console.log('h = ', id)
        console.log('e = ', email)
        console.log('d = ', data)
        const hotel = await Hotel.findOne(
            { vendorId: email },
        )
        if (hotel) {
            console.log('hotel = ' + hotel);
            const hoteldata = await Hotel.updateOne(
                { "hotelDetails.image1": id },
                { $set: { "hotelDetails.$": data } }
            )
            if (hoteldata) {
                console.log(hoteldata);
                res.status(200).json({ message: 'edited' })
            }
        } else {
            console.log(err);
        }
    }
    catch (err) {
        console.log(err.message);
    }
}



// hotel_delete_services

exports.hotel_delete_services = async (req, res) => {
    try {
        let id = req.query.id
        let email = jwt_decode(req.query.email)
        email = email.subject

        const hotel = await Hotel.updateOne({ vendorId: email }, { $pull: { hotelDetails: { image1: id } } })
        if(hotel){
            console.log('hotel = ',hotel);
            res.json({message:'deleted'})
        }else{
            console.log('error');
        }
    }
    catch (err) {
        console.log(err)
    }
}





// hotel_details

exports.hotel_details = async (req, res) => {
    let Email = req.query.subject
    // console.log(Email);

    try {
        const vendorData = await Hotel.findOne({ vendorId: Email })
        if (vendorData) {
            // let result = {
            //     hotelName: vendorData.hotelName, location: vendorData.location, totalRooms: vendorData.totalRooms,
            //     actualPrice: vendorData.actualPrice, discountPrice: vendorData.discountPrice, description: vendorData.description,
            //     addRoomsFeature: vendorData.addRoomsFeature, addRoomsTypes: vendorData.addRoomsTypes, image1: vendorData.image1,
            //     subImages: vendorData.subImages
            // };

            // console.log(vendorData.hotelDetails);

            let result = vendorData.hotelDetails

            // console.log('result = ', result);
            res.json({ result })
        } else {
            console.log('error');
            res.status(401)
        }
    }
    catch (err) {
        console.log(err);
    }
}




// get_edit_details

exports.hotel_edit_details = async (req, res) => {
    let data = req.query.param1
    console.log(data);
    try {
        let email = jwt_decode(req.query.param2);
        email = email.subject;
        let id = data
        console.log('id = ', id);
        let hotel = await Hotel.findOne({ vendorId: email }, { hotelDetails: { "$elemMatch": { image1: id } } })
        if (!hotel) {
            console.log("Hotel not found with id: ", id);
        } else {
            console.log("Hotel found: ", hotel);
            res.status(200).json(hotel)
        }
    }
    catch (err) {
        console.log(err);
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



//  restaurant_add_food

exports.restaurant_add_food = async (req, res) => {
    let food = await req.body.food
    let restaurantEmail = req.body.email
    console.log(food);
    console.log(restaurantEmail);

    try {
        restaurantEmail = jwt_decode(restaurantEmail)
        console.log(restaurantEmail.subject);

        const restaurant = await Restaurant.findOne({ vendorId: restaurantEmail.subject })
        if (restaurant) {
            Restaurant.updateMany(
                { vendorId: restaurantEmail.subject },
                {
                    $push: {
                        restaurantDetails: food
                    }
                })
                .then((result) => {
                    console.log('haii');
                    if (result) {
                        console.log('result = ', result);
                        // res.status(200)
                        res.json({ message: 'Data_Added' })
                    } else {
                        console.log(err);
                        res.status(400)
                    }
                })

        } else {
            const restaurant = await Restaurant.create({ vendorId: restaurantEmail.subject, restaurantDetails: food })
            if (result) {
                console.log('result = ', result);
                // res.status(200)
                res.json({ message: 'Data_Added' })
            } else {
                console.log(err);
                res.status(400)
            }
        }
    }
    catch (err) {
        console.log(err);
    }
}




// restaurant_food_details

exports.restaurant_food_details = async (req, res) => {
    let Email = req.query.subject
    console.log(Email);

    try {
        const vendorData = await Restaurant.findOne({ vendorId: Email })
        if (vendorData) {
            console.log(vendorData);
            let result = vendorData.restaurantDetails
            console.log('result = ', result);
            res.json({ result })
        } else {
            console.log('error');
            res.status(401)
        }
    }
    catch (err) {
        console.log(err);
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


