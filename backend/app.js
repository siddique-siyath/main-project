const express=require('express')
// const db=require('./server/database/connection')
const mongoose =require('mongoose')

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

    
const app = express();

const userRouter=require('./server/router/user_router')
const adminRouter = require('./server/router/admin_router')
const vendorRouter = require('./server/router/vendor_router')

app.use(express.urlencoded({extended:false}))

const cors = require('cors')

const sessions=require('express-session')
app.use(express.static('public'))
const PORT=3000



app.use('/uploads',express.static('upload'))



app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello Server")
})



app.use(userRouter)
app.use('/admin',adminRouter)
app.use('/vendor',vendorRouter)



//session
app.use(sessions({
    secret : 'verygoodpassword',
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge: 6000000}
}))


app.listen(PORT, function(){
    console.log('server is running on localhost ' + PORT);
})

const db = "mongodb://127.0.0.1:27017/user"

mongoose.set('strictQuery', false);

mongoose.connect(db)
    .then(() => {
        console.log("mongoose connected");
    })
    .catch((err) => {
        console.log(err);
    })


          

               
