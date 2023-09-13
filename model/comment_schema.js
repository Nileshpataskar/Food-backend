const mongoose = require("mongoose");

const comment_structure = mongoose.Schema({
 
  comment: {
    type: String,
  },
  user: {
    type: String,
  },
  time:{
    type:String
  }
});

const Comments_db = mongoose.model("Comments", comment_structure);
module.exports = {Comments_db};