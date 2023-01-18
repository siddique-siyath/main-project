const express=require('express')
const services=require('../controller/vendorController')

const router=express.Router();
const store = require('../middleware/multer')

router.post('/vendor_login', services.vendor_login)
router.post('/vendor_signup',  services.vendor_signup)
router.get('/verify',services.verify)

router.post('/add_hotel',store.any(), services.add_hotel )
router.get('/hotel_home',services.hotel_home)
router.post('/add_hotel_services',services.hotel_add_services)
router.get('/hotel_details',services.hotel_details)


router.post('/add_restaurant',store.any(), services.add_restaurant )
router.get('/restaurant_home',services.restaurant_home)

router.post('/add_car',store.any(), services.add_car )
router.get('/car_home',services.car_home)

router.post('/add_guide',store.any(), services.add_guide )
router.get('/guide_home',services.guide_home )


module.exports = router;                                       