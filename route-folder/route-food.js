const { addRecipe, getRecipe, deleteAllData, getRecipesByUserID, deleteDataByUserIDAndItemID } = require("../controller/addRecipe_controller");
const { addComment, fetchComments } = require("../controller/comments");

const route_food = require("express").Router();

route_food.post("/addcomment", addComment);

route_food.get("/fetchcomments", fetchComments);

route_food.post("/addrecipe", addRecipe);

route_food.get("/getrecipe", getRecipe);

route_food.delete('/deleteall', deleteAllData);

// route_food.delete('/deletespecific', deleteRecipeByUserID);
route_food.delete('/deleteitem/:userID/:itemID', deleteDataByUserIDAndItemID);


route_food.get('/recipes/:userID', getRecipesByUserID);


module.exports = { route_food };
