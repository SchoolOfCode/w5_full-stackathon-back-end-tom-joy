const { query } = require("../db/index");

async function getAllRecipes() {
    const res = await query("SELECT * FROM recipes ORDER BY id ASC;")
    return res.rows;
}

async function getRecipesByCountry(country) {
    const res = await query("SELECT * FROM recipes WHERE country = $1 ORDER BY id ASC;", [country])
    return res.rows;
}

module.exports = { getAllRecipes, getRecipesByCountry };