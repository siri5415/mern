const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignUp")
const userSignInController = require('../controller/userSignIn')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogOut = require('../controller/userLogOut')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get('/user-details',authToken,userDetailsController)
router.get('/userLogOut',userLogOut)

//admin panel
router.get("/all-user",authToken,allUsers)
router.get("/update-user",authToken,updateUser)





module.exports = router