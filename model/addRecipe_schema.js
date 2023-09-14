const mongoose = require("mongoose");

const addRecipe_structure = new mongoose.Schema({
  userid: String,
  recipeTitle: String,
  recipeDescription: String,
  recipeCategory: String,
  recipeSource: String,
  recipeCookTime: String,
  recipeIngredients: String,
  recipeDirections: String,
  recipeImage: String,
});

const addRecipe_db = mongoose.model("addRecipe", addRecipe_structure);

module.exports = { addRecipe_db };
