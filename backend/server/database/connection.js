const mongoose =require('mongoose')

// module.exports={
//     connectToDb:(cb)=>{
//         mongoose.connect("mongodb://127.0.0.1:27017/user")
//         .then(()=>{console.log("connected to db")
//         return cb()

//         })
//         .catch((err)=>{
//             console.log(err)
//             return cb(err)
//         })
//     }
// }