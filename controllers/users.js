const db = require("../config/database");
module.exports = {
  index,
};

async function index(req, res, next) {
  try {
    console.log("index reached");
    let sortKey = req.query.sort || "name";
    console.log(req.user);
    if (req.query.name) {
      const text = "SELECT * FROM users WHERE name = $1";
      const values = [new RegExp(req.query.name, "i")];

      const person = await db.query(text, values);

      return res.render("javahut/user", {
        person,
        name: req.query.name,
        sortKey,
        user: req.user,
      });
    }
    const text = "SELECT users.id, users.name, users.email FROM users";
    const { rows } = await db.query(text);

    res.render("javahut/user", {
      students: rows,
      name: req.query.name,
      sortKey,

      user: req.user,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
}
