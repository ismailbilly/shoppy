
const mongoose = require('mongoose');
const connectDatabase = () =>{
    mongoose.connect("mongodb+srv://mongo:mongo@cluster0.a0myk0o.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    .then((data)=>{
        console.log(`mongod connected with server: ${data.connection.host}`);
    });
}

module.exports = connectDatabase;
