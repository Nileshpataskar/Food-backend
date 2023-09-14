const { addRecipe, getRecipe } = require("../controller/addRecipe_controller");
const { addComment, fetchComments } = require("../controller/comments");

const route_food = require("express").Router();

route_food.post("/addcomment", addComment);

route_food.get("/fetchcomments", fetchComments);

route_food.post("/addrecipe", addRecipe);

route_food.get("/getrecipe", getRecipe);
module.exports = { route_food };
