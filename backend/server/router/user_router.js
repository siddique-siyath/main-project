const express=require('express')
const services=require('../controller/userController')

const router=express.Router();

router.post('/user_login', services.user_login)
router.post('/user_signup', services.user_signup)


module.exports = router;                                       