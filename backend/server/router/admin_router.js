const express=require('express')
const services=require('../controller/adminController')

const router=express.Router();

router.post('/admin_login', services.admin_login)
router.get('/admin_home', services.admin_home)

router.get('/user_data', services.userData)
router.post('/user_block', services.userBlock)
router.post('/user_unblock', services.userUnBlock)

router.get('/vendor_data', services.vendorData)
router.post('/vendor_block', services.vendorBlock)
router.post('/vendor_unblock', services.vendorUnBlock)
router.post('/vendor_verify',services.verify_vendor)


module.exports = router;                                       