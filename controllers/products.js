const db = require("../config/database");

async function showDrink(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM drinks WHERE id = $1", [id]);
    res.render("javahut/drink_products", { drinks: rows[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

async function showFood(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("SELECT * FROM food WHERE id = $1", [id]);
    res.render("javahut/food_products", { food: rows[0] });
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = {
  showDrink,
  showFood,
};
