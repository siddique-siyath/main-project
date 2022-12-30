const express=require('express')
const services=require('../controller/vendorController')

const router=express.Router();
const store = require('../middleware/multer')

router.post('/vendor_login', services.vendor_login)
router.post('/vendor_signup',  services.vendor_signup)
router.post('/add_hotel', services.add_hotel )
router.get('/hotel_home',services.hotel_home)


module.exports = router;                                       