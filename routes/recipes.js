var express = require("express");
var router = express.Router();
const {
  getAllRecipes,
  getRecipesByCountry,
  deleteRecipeById,
  postNewRecipe,
  updateRecipeById,
  patchRecipeById,
} = require("../models/recipes");

// get all data from recipes
router.get("/", async (req, res) => {
  const recipes = await getAllRecipes();
  res.json({
    message: "Here are the recipes",
    payload: recipes.rows,
  });
});

// get data by country name
router.get("/", async (req, res) => {
  const { search } = req.query;
  if (search) {
    const recipesByCountry = await getRecipesByCountry("country", search);
    res.json({
      message: `Here are the recipes of ${country}`,
      payload: recipesByCountry.rows,
    });
  }
});

module.exports = router;
