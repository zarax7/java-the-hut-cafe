const db = require("../config/database");

// show all items in cart page
async function index(req, res, next) {
  try {
    const { rows } = await db.query("SELECT * FROM orders");
    res.render("javahut/cart", { order: rows });
  } catch (err) {
    next(err);
  }
}

// add to cart not orders
async function addToCart(req, res, next) {
  console.log(req.body);
  const { id, name, cream, milk, sugar, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO orders (drink_id, name, customization_cream, customization_milk, customization_sugar, price) VALUES ($1, $2, $3, $4, $5, $6) ",
    [id, name, cream, milk, sugar, parseFloat(price)]
  );
}

async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;
    const { rows } = await db.query("DELETE FROM orders WHERE id = $1", [id]);
    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
}

async function send(req, res, next) {
  try {
    const { name, price } = req.body;
    const { rows } = await db.query("SELECT * FROM orders");
    res.render("javahut/message", { order: rows });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  index,
  addToCart,
  delete: deleteProduct,
  send,
};
