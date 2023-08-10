const express = require('express');

const upload = require('../config/multer')
const uploadForCat = require('../config/multerCat')
const uploadForBan = require('../config/multerBanner')
const adminController = require('../controllers/admin')
const categoryController = require('../controllers/category')
const productController = require('../controllers/products')
const orderController = require('../controllers/order')
const bannerController = require('../controllers/banner')
const couponController = require('../controllers/coupon')
const offerController = require('../controllers/offer')
// const isAdmin = require('../middleware/adminAuth')
const { loggedIn, loggedOut } = require('../middleware/adminAuth')


const router = express.Router()

//dashboard
router.get('/', loggedIn, adminController.getDashboard)


//login
router.get('/login', loggedOut, adminController.getLogin)
router.post('/login', adminController.postLogin)

//logout
router.post('/logout', adminController.logout)

//users
router.get('/users', loggedIn, adminController.getUserData)
router.get('/status/:id', loggedIn, adminController.postUserStatus)//block/unblock user


//category
router.get('/category', loggedIn, categoryController.getCategory)
router.post('/category', loggedIn, uploadForCat.single('image'), categoryController.addCategory)
router.get('/category/status/:id', loggedIn, categoryController.changeStatus)
router.post('/category/edit', loggedIn, uploadForCat.single('image'), categoryController.editCategory)
router.get('/category/delete/:id', loggedIn, categoryController.deleteCategory)


//size
router.get('/category/size/:id', loggedIn, categoryController.getSize)
router.post('/category/size', loggedIn, categoryController.addSize)
router.get('/category/size/delete/:id', loggedIn, categoryController.deleteSize)
router.post('/category/size/edit', loggedIn, categoryController.editSize)

//products
router.get('/products', loggedIn, productController.getProducts)
router.get('/product/addProduct', loggedIn, productController.getAddProduct)
router.post('/product/addProduct', loggedIn, upload.array('image', 3), productController.postAddProduct)

router.get('/product/delete/:id', loggedIn, productController.deleteProduct)
router.get('/product/edit/:id', loggedIn, productController.getEditProduct)
router.post('/product/edit', loggedIn, upload.array('image', 3), productController.postEditProduct)

router.get('/productImageDelete/:id', loggedIn, productController.imageDelete)


//orders
router.get('/orders', loggedIn, orderController.getOrdersAdmin)
router.post('/orderStatus', loggedIn, orderController.orderStatus)
router.post('/cancelOrder/:id', loggedIn, orderController.cancelOrder)
router.get('/singleOrderDetails', loggedIn, orderController.singleOrderDetails)


//banner
router.get('/banner', loggedIn, bannerController.getBanner)
router.post('/addUpdateImage', loggedIn, uploadForBan.single('image'), bannerController.postBanner)


//coupon
router.get('/coupon', loggedIn, couponController.getCoupon)
router.get('/addCoupon', loggedIn, couponController.getAddCoupon)
router.post('/addCoupon', loggedIn, couponController.postAddCoupon)
router.get('/editCoupon', loggedIn, couponController.getEditCoupon)
router.post('/editCoupon/:id', loggedIn, couponController.postEditCoupon)
router.post('/changeStatus/:id', loggedIn, couponController.changeStatus)

//return
router.post('/approveReturn/:id', loggedIn, orderController.approveReturn)

//offers
router.get('/offers', loggedIn, offerController.getOffer)
router.get('/addOffer', loggedIn, offerController.getAddOffer)
router.post('/addOffer', loggedIn, offerController.postAddOffer)
router.get('/editOffer', loggedIn, offerController.getEditOffer)
router.post('/editOffer/:id', loggedIn, offerController.postEditOffer)
router.post('/changeOfferStatus/:id',loggedIn,offerController.offerStatus)


//category offer
router.post('/categoryOfferApply',loggedIn,categoryController.applyOffer)
router.post('/removeCategoryOffer/:id',loggedIn,categoryController.removeOffer)

//product offer
router.post('/productOfferApply',loggedIn,productController.applyOffer)
router.post('/removeProductOffer/:id',loggedIn,productController.removeOffer)

router.get('/salesReportMonth',loggedIn,adminController.getDashboard)



module.exports = router