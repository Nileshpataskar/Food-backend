const { addRecipe_db } = require("../model/addRecipe_schema");

const addRecipe = async (req, res) => {
    const addRecipeInfo = req.body;
    const data = await addRecipe_db.create(addRecipeInfo);
    res.send({ message: "Your Recipe Added Successfully", result: data });
};

const getRecipe = async (req, res) => {
    const data = await addRecipe_db.find({});
    res.send(data);
};

module.exports = { addRecipe, getRecipe };
