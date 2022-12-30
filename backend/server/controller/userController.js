
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
                console.log('save',user);
                user.save()
                    .then((result) => {
                        console.log('f',result);
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



// user_login

exports.user_login = async (req, res) => {
    let userdata = req.body
    console.log(userdata);

    try {
        const user = await User.findOne({ email: userdata.email })
        if (user) {
            const isMatch = await bcrypt.compare(userdata.password, user.password)
            console.log('success');
            if (isMatch) {
                 let payload = { subject : user._id }
                let token = jwt.sign(payload, 'secretKey')
                return res.status(200).json({ message: 'logined', token })
                console.log('user logined');
            } else {
                // res.status(401)
                return res.json({ errMessage: "incorrectPassword" })
                console.log("Invalid password");
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