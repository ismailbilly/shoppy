const ErrorHandler = require('../utils/Errorhandler')


module.exports=(err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'Internal server error'

    //wrong mongoDB id error
    if(err.name === "CastError"){
        const message =`Resources not found with this id. Invalid ${err.path}`
        err =new ErrorHandler(message, 400)
    }
    //Duplicate key error
    if(err.code === 11000){
        const message = `Duplicate key ${Object.keys(err.keyValu)} entered`
    }
    //wrong jwt error
    if(err.name === "JsonWebTokenError"){
        const message = `Your url is invalid. Please try again later`
        err = new ErrorHandler(message, 400)
    }
    //jwt expired
    if(err.name ==="TokenExpiredError"){
        const message = `Your url is expired. Please try again later`
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
    
}