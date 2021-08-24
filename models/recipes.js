const { query } = require("../db/index");

//GET everything
async function getAllRecipes() {
  const res = await query("SELECT * FROM recipes ORDER BY id ASC;");
  return res;
}

//GET all recipes for a given country (needs a country name passed in)
async function getRecipesByCountry(country) {
  const res = await query(
    "SELECT * FROM recipes WHERE country = $1 ORDER BY id ASC;",
    [country]
  );
  return res;
}

//DELETE a recipe using an ID (needs a ID number passed in)
async function deleteRecipeById(id) {
  const res = await query("DELETE FROM recipes WHERE id = $1 RETURNING *;", [
    id,
  ]);
  return res;
}

//POST a new recipe (needs a recipe passed in with country, recipe, ingredients and steps)
async function postNewRecipe(recipeObject) {
  const { country, recipe, ingredients, steps } = recipeObject;
  const res = await query(
    "INSERT INTO recipes (country, recipe, ingredients, steps) VALUES ($1,$2,$3,$4) RETURNING *;",
    [country, recipe, ingredients, steps]
  );
  return res;
}

//UPDATE an existing recipe (needs a recipe passed in with country, recipe, ingredients and steps, plus an ID number)
async function updateRecipeById(recipeObject, id) {
  const { country, recipe, ingredients, steps } = recipeObject;
  const res = await query(
    "UPDATE recipes SET country = $1, recipe = $2, ingredients = $3, steps = $4 WHERE id = $5 RETURNING *;",
    [country, recipe, ingredients, steps, id]
  );
  return res;
}

//UPDATE an existing recipe only on one column name/value (this needs to be supplied seperately with the id);
async function patchRecipeById(col_name, value, id) {
  const data = await query(
    `UPDATE recipe SET ${col_name} = $1 WHERE id = $2 RETURNING *;`,
    [value, id]
  );
  return data.rows;
}

module.exports = {
  getAllRecipes,
  getRecipesByCountry,
  deleteRecipeById,
  postNewRecipe,
  updateRecipeById,
  patchRecipeById,
};
