const passport = require("passport");
const { response } = require("../server");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const db = require("./database");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      const findUser = "SELECT * FROM users WHERE googleId = $1";
      const values = [profile.id];
      db.query(findUser, values, (err, user) => {
        if (err) cb(err);
        if (user.rows[0]) {
          return cb(null, user.rows[0]);
        } else {
          const text =
            "INSERT INTO users (name, email, googleId) VALUES ($1, $2, $3)";
          const values = [
            profile.displayName,
            profile.emails[0].value,
            profile.id,
          ];
          db.query(
            text,
            values,
            (err,
            (response) => {
              if (err) cb(err);
              return cb(null, response.rows[0]);
            })
          );
        }
      });
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  const text = "SELECT * FROM users WHERE id= $1";
  const values = [id];

  db.query(text, values, (err, user) => {
    done(err, user);
  });
});
