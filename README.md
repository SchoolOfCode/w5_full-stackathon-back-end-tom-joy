<div align="center">
    <img alt="School of Code" src="./images/soc-logo.png" width="60" />
</div>
<h1 align="center">
  Full Stack - Back End
</h1>

## Task

- Plan your database structure and decide how you want to store each piece of data (what columns, types, any relationships if having multiple tables), then create your database in Heroku. Install the draw.io [VS Code extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) so that you can diagram within the repo.
- Plan a fully RESTful back end following all best practices with _all_ CRUD routes implemented as laid out in the example requirements table below. Customize the requirements table with your specific paths/data before coding, and add it to the README so that it documents all of your API routes.
- Break your plan into issues on your team's Trello board, and use those to guide how you code.
- Code your back end in this repository.

### Requirements table

| Method | Path           | Additional Info                                                        | Result                                 | Response                                  |
| ------ | -------------- | ---------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| GET    | /recipe      |                                                                        | all item                               | { success: Boolean, payload: item array } |
| GET    | /recipe      | ?query=searchString (query should match a column in the DB, e.g. name) | all data matching query                | { success: Boolean, payload: item array } |

At least 1 recipie per country already added. 

| id (SERIAL PRIMARY KEY) | NAME OF COUNTRY (text) | NAME OF RECIPE (text) | INGREDIENTS (list of text items) | STEPS (text) |
-------------------------------------------------------------------------------------------------------------------------
        1                       "Italy"                   "Pasta"                    "Tomatoes", "salad"        "1. cook pasta 2. Add sauce"

## Resources

- [How Slack designs APIs](https://slack.engineering/how-we-design-our-apis-at-slack/)
- [UK government API standards](https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
