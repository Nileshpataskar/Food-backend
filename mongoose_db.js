const mongoose = require('mongoose');

mongoose.set('strictQuery',true)

const url =
  "mongodb+srv://nilu:nilu@cluster0.h8s11mu.mongodb.net/Food?retryWrites=true&w=majority";

const connection=async()=>{
    try{ 
        await mongoose.connect(url);
        console.log("Connection Established!!!")
    }
    catch(err){
        console.log("Error Creating Connection!!!")
    }
}

module.exports=connection;