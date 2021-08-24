const { query } = require("../index");
const recipes = require("./data");

async function populateTableScores(data) {
  for (let i = 0; i < data.length; i++) {
    const res = await query(
      `INSERT INTO recipes(country,recipe,ingredients,steps) VALUES ($1, $2, $3, $4) RETURNING *`,
      [data[i].country, data[i].recipe, data[i].ingredients, data[i].steps]
    );
    console.table(res.rows);
  }
}
populateTableScores(recipes);
