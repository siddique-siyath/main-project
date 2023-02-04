const express=require('express')
const services=require('../controller/userController')

const router=express.Router();

router.post('/user_login', services.user_login)
router.post('/user_signup', services.user_signup)
router.get('/user_profile', services.user_profile)
router.post('/user_insertPhoto',services.user_insertPhoto)

router.get('/hotel',services.hotel)
router.post('/hotel_details',services.hotel_details)
router.post('/book_room',services.book_room_hotel)

module.exports = router;                                               