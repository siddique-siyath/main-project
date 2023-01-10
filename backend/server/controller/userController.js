
const User = require('../model/user');

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


let session;

let message;
let errMessage;




// User


// user_signup

exports.user_signup = async (req, res) => {
    let userdata = req.body
    console.log(userdata);

    let user = new User(userdata)


    const hashedpassword = await bcrypt.hash(user.password, 12);
    user.password = hashedpassword;
    user.status = true;

    User.findOne({ email: userdata.email })
        .then((result) => {

            if (result) {
                // res.status(401)
                res.json({ errMessage: 'already exist' })
                console.log('this email is already used')
            } else {
                console.log('save', user);
                user.save()
                    .then((result) => {
                        console.log('f', result);
                        let payload = { subject: result._id }
                        let token = jwt.sign(payload, 'secretKey')
                        res.status(200).json({ message: 'signup', token })
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



// user_login

exports.user_login = async (req, res) => {
    let userdata = req.body
    console.log(userdata);

    try {
        const user = await User.findOne({ email: userdata.email })
        if (user) {
            if (user.status != false) {
                const isMatch = await bcrypt.compare(userdata.password, user.password)
                console.log('success');
                if (isMatch) {
                    let payload = { subject: user.email }
                    let token = jwt.sign(payload, 'secretKey')
                    return res.status(200).json({ message: 'logined', token })
                    console.log('user logined');
                } else {
                    // res.status(401)
                    return res.json({ errMessage: "incorrectPassword" })
                    console.log("Invalid password");
                }
            } else {
                return res.json({ errMessage: "userBlocked" })
            }
        } else {
            // res.status(401)
            return res.json({ errMessage: 'incorrectEmail' })
            console.log('Invalid email');
        }
    }

    catch (err) {
        console.log(err.message);
    }

}





// user_profile

exports.user_profile = (req, res) => {
    userData = req.query.subject
    console.log('email', User);
    try {
        User.findOne({ email: userData })
            .then((result) => {
                if (result) {
                    const data = {
                        email: result.email, name: result.name,
                        profilePhoto: result.profilePhoto
                    }
                    console.log('data = ', data);
                    res.status(200).json({ message: 'user_profile', data })
                    console.log(result);
                } else {
                    console.log('email invalid');
                    res.status(400).json({ errMessage: 'result is not found' })
                }
            })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ errMessage: 'result is not found' })
    }
}




// user_insertPhoto


exports.user_insertPhoto = async (req, res) => {
    user = req.body
    console.log(User);

    try {
        let userData = await User.findOneAndUpdate({ email: user.email.subject }, { $set: { profilePhoto: user.photo } })
            .then((result) => {
                if (result) {
                    console.log(result);
                    res.status(200).json({ message: 'user_profile', result })
                    console.log(result);
                } else {
                    console.log('email invalid');
                    res.status(400).json({ errMessage: 'result is not found' })
                }
            })
    }
    catch (err) {
        console.log(err);
    }
}