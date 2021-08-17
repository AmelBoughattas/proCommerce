
const router = require('express').Router()
const userController = require('../controller/userController')
const {validationCheck} =require('../middleware/dataCheckMiddleware'); 
const {tokenMiddleware} =require('../middleware/tokenMiddleware')

router.post('/register', validationCheck,  userController.register)

router.post('/login', validationCheck,  userController.login)

router.get('/getprofile', tokenMiddleware,  userController.getUserProfile)



module.exports = router