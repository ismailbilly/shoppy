const express = require('express')
const path = require('path')
const User = require('../models/user')
const router = express.Router()
const {upload} = require('../multer')
const ErrorHandler = require('../utils/Errorhandler')

router.post('/create-user', upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body
    const userEmail = await User.findOne({email})

    if(userEmail){
        return next(new ErrorHandler('User already exists', 400))

    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const user = {
        name,
        email,
        password,
        avatar : fileUrl
    }
    console.log(user)

})
module.exports = router