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

// get all data from recipes & get data by country name ✅ tested
router.get("/", async (req, res) => {
  const { country } = req.query;
  if (country) {
    const recipesByCountry = await getRecipesByCountry(country);
    res.json({
      message: `Here are the recipes of ${country}`,
      payload: recipesByCountry.rows,
    });
    return;
  }
  const recipes = await getAllRecipes();
  res.json({
    message: "Here are the recipes",
    payload: recipes.rows,
  });
});

// delete recipe by id ✅ tested
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteRecipeById(id);
  res.json({
    success: true,
    message: `recipe ${id} deleted!`,
  });
});

// Post new recipe ✅ tested
router.post("/", async (req, res) => {
  const { body } = req;
  const data = await postNewRecipe(body);
  console.log(data);
  res.json({
    success: true,
    message: `new recipe added!`,
    payload: data, // not returning data?
  });
});

// Update recipe by id ✅ tested
router.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const data = await updateRecipeById(body, id);

  res.json({
    success: true,
    message: `recipe ${id} updated`,
    payload: data.rows,
  });
});

// Patch recipe by id 
router.patch("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  let payload;

  // make an array of acceptable column names
  const acceptableColumnHeaders = ["recipe", 
                                   "country", 
                                   "ingredients", 
                                   "steps"];

  // check that all col_names are acceptable names
  for (const col_name in body) {
    if(!acceptableColumnHeaders.includes(col_name)) {
      res.json({
      success: false,
      message: `You have supplied an invalid column header`,
      })
      return;
  // if all col_names are accetable - then proceed (i.e., call the update function for each property given in the body)
    } else {
      const value = body[col_name];
      payload = await patchRecipeById(col_name, value, id);
    }
  }
  
  res.json({
    success: true,
    message: `recipe ${id} updated`,
    payload: payload,
  });
});

module.exports = router;
