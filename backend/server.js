const app = require('./app')

//Handling uncaughtException
process.on('uncaughtException', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('server is shutting down due to uncaught exception');

})

//config
if(process.env.NODE_ENV !== 'PRODUCTION'){
    require('dotenv').config({
        path: "config/.env"
    })
}

//create server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is runnig on https://localhost/${process.env.PORT}`);
})

//unhandled promise rejection
process.on('unhandledRejection', (err)=>{
    console.log(`unhandledRejection Error : ${err.message}`);
    console.log('server is shutting down due to unhandled Rejection');

    server.close(()=>{
        process.exit(1)
    })
})