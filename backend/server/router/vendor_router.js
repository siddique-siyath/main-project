const express = require('express')
const services = require('../controller/vendorController')

const router = express.Router();
const store = require('../middleware/multer')

router.post('/vendor_login', services.vendor_login)
router.post('/vendor_signup', services.vendor_signup)
router.get('/verify', services.verify)

router.post('/add_hotel', store.any(), services.add_hotel)
router.get('/hotel_home', services.hotel_home)
router.post('/add_hotel_services', services.hotel_add_services)
router.patch('/edit_hotel_services',services.hotel_edit_services)
router.get('/hotel_details', services.hotel_details)
router.get('/edit_details',services.hotel_edit_details)
router.delete('/delete_hotel_services',services.hotel_delete_services)


router.post('/add_restaurant', store.any(), services.add_restaurant)
router.get('/restaurant_home', services.restaurant_home)
router.post('/add_restaurant_food', services.restaurant_add_food)
router.get('/restaurant_food_details', services.restaurant_food_details)

router.post('/add_car', store.any(), services.add_car)
router.get('/car_home', services.car_home)

router.post('/add_guide', store.any(), services.add_guide)
router.get('/guide_home', services.guide_home)


module.exports = router;                                       