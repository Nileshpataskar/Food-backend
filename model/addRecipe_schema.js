const mongoose = require("mongoose");

const addRecipe_structure = new mongoose.Schema({
  userid: String,
  label: String,
  recipeDescription: String,
  calories: String,
  source: String,
  totalTime: String,
  ingredients: Array,
  ingredientLines: Array,
  image: String,
});

const addRecipe_db = mongoose.model("addRecipe", addRecipe_structure);

module.exports = { addRecipe_db };
