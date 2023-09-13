const { Comments_db } = require("../model/comment_schema");

const addComment=async(req,res)=>{
    try {
        const data = req.body;
    
        const result = await Comments_db.insertMany(data);
    
        res.send({ msg: "Comments Stored successfully", Result: result });
      } catch (err) {
        console.log("Error while inserting", err);
      }
}
const fetchComments = async (req, res) => {
    const result = await Comments_db.find();
  
    return res.send({ msg: "Comments Fetched", Result: result });
  };

  module.exports={addComment,fetchComments}
  