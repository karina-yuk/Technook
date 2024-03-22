// Import required Node.js modules and packages
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");
require("dotenv").config();

// Import Sequelize and configure the session store
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Create an Express.js application
const app = express();
const PORT = process.env.PORT || 3001;

// Configure Handlebars.js with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session settings
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 800000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use the configured session middleware in the Express.js application
app.use(session(sess));

// Configure Handlebars.js as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Configure middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
