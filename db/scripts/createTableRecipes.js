const { query } = require("../index");

async function createTable() {
  const createTableQuery = `CREATE TABLE recipes(
                                id SERIAL PRIMARY KEY,
                                country TEXT,
                                recipe TEXT,
                                ingredients TEXT[],
                                steps TEXT);`;

  const res = await query(createTableQuery);
  console.log("new table created!");
  console.table(createTableQuery);
}

createTable();
