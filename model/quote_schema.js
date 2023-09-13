const mongoose = require("mongoose");

const quote_structure = mongoose.Schema({
 
  quote: {
    type: String,
  },
  user: {
    type: String,
  },
  time:{
    type:String
  }
});

const Quote_db = mongoose.model("Quote", quote_structure);
module.exports = {Quote_db};