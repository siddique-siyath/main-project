
const Admin = require('../model/admin')
const User = require('../model/user')

const bcrypt = require('bcrypt');
const Vendor = require('../model/vendor');
const { ObjectId } = require('mongodb');


let session;

let message;
let errMessage;

// Admin


// admin_login

exports.admin_login = (req, res) => {
    let adminData = req.body
    console.log(adminData);

    Admin.findOne({ email: adminData.email })
        .then((email) => {
            if (email) {
                Admin.findOne({ password: adminData.password })
                    .then((password) => {
                        if (password) {
                            // res.status(200)
                            res.json({ message: 'admin_logined' })
                        } else {
                            // res.status(401)
                            res.json({ errMessage: 'incorrectPassword' })
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } else {
                // res.status(401)
                res.json({ errMessage: 'incorrectEmail' })
            }
        })
        .catch((err) => {
            console.log(err);
        })
}


exports.admin_home = (req, res) => {
    res.send('Hello hello')
    console.log('sdfghj');
}


// user_Data

exports.userData = async (req, res) => {
    try {
        const userData = await User.find({})
        if (userData) {
            console.log(userData);
            // res.send(userData)
            res.json({ userData })
        } else {
            console.log('error');
            res.status(401)
        }
    }
    catch (err) {
        console.log(err.message);
    }
}



// user Block

exports.userBlock = (req, res) => {
    console.log('asdfghj');
    console.log(req.body.queryParams.id);
    try {
        let userId = req.body.queryParams.id
        console.log(userId);
        User.findOneAndUpdate({ _id: userId }, { $set: { status: false } })
            .then((result) => {
                if (result) {
                    console.log('changed');
                    res.json({ message: 'changed' })
                } else {
                    console.log(err);
                    res.status(401)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (err) {
        console.log(err.message);
    }
}



// user UnBlock

exports.userUnBlock = (req, res) => {
    console.log('asdfghj');
    console.log(req.body.queryParams.id);
    try {
        let userId = req.body.queryParams.id
        console.log(userId);
        User.findOneAndUpdate({ _id: userId }, { $set: { status: true } })
            .then((result) => {
                if (result) {
                    console.log('changed');
                    res.json({ message: 'changed' })
                } else {
                    console.log(err);
                    res.status(401)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    catch (err) {
        console.log(err.message);
    }
}




// vendor details

exports.vendorData = async (req, res) => {
    try {
        const vendorData = await Vendor.find({})
        if (vendorData) {
            console.log(vendorData);
            res.send(vendorData)
            // res.json({ vendorData })
        } else {
            console.log('error');
            res.status(401)
        }
    }
    catch (err) {
        console.log(err.message);
    }
}





