const db = require("../config/database");

function home(req, res, next) {
  res.render("landing");
}

async function menu(req, res, next) {
  try {
    const drinks = await db.query("SELECT * FROM drinks");
    const food = await db.query("SELECT * FROM food");
    res.render("javahut/menu", { drinks: drinks.rows, food: food.rows });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  home,
  menu,
};
