const express = require("express");
const connection = require("./mongoose_db.js");
const cors=require("cors");
const { route_food } = require("./route-folder/route-food.js");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json())


app.use('/',route_food)


app.listen(8999,async()=>{
    try{
        await connection()
        console.log("listening on 8999")

    }
    catch(err){
        console.log("Error listening",err)
    }
});