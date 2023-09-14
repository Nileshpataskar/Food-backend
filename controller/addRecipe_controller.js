const { addRecipe_db } = require("../model/addRecipe_schema");

const addRecipe = async (req, res) => {
  const { userid, label } = req.body;

  // Check if a recipe with the same title exists for the same user
  const existingRecipe = await addRecipe_db.findOne({ userid, label });

  if (existingRecipe) {
    return res
      .status(400)
      .send({ message: "Recipe already exists for this user" });
  }

  // If no existing recipe found, add the new recipe
  const data = await addRecipe_db.create(req.body);
  res.send({ message: "Your Recipe Added Successfully", result: data });
};

const getRecipe = async (req, res) => {
  const data = await addRecipe_db.find({});
  res.send(data);
};

const deleteAllData = async (req, res) => {
  try {
    // Use the `deleteMany` method to delete all documents in the collection
    await addRecipe_db.deleteMany({});

    res.status(200).json({ message: "All data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getRecipesByUserID = async (req, res) => {
  try {
    const { userID } = req.params;

    // Use the `find` method to find recipes for the specified userID
    const recipes = await addRecipe_db.find({ userid: userID });

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteDataByUserIDAndItemID = async (req, res) => {
  try {
    const { userID, itemID } = req.params;

    // Use the `findOneAndDelete` method to find and delete the data item
    // that matches both the userID and itemID
    const deletedItem = await addRecipe_db.findOneAndDelete({
      userid: userID,
      _id: itemID,
    });

    if (!deletedItem) {
      // If no matching item is found, send a 404 Not Found response
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addRecipe, getRecipe, deleteAllData, getRecipesByUserID, deleteDataByUserIDAndItemID };


