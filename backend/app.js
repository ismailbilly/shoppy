const express = require("express")
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser')
const cors = require("cors");
// const fileUpload = require('file-upload')
const connectDatabase = require('./db/database')
const ErrorHandler = require("./utils/Errorhandler")


const app = express()
app.use(cors());
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(cookieParser(express.json))

app.use('/', express.static('uploads'))
app.use(bodyParser.urlencoded({extended:true}))
// app.use(fileUpload({useTempFiles: true}))

//database connection 
connectDatabase()

//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path: "config/.env"
    })
}
//Routes

const user = require('./controllers/user') 
app.use('/api/v2/user', user)
//Error handling
app.use(ErrorHandler)

module.exports = app