const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(morgan('dev'));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
const userController = require('./app/controllers/user.controller');

const run = async () => {
  const user1 = await userController.createUser({
    email: "email@email.com",
    password: "12345",
    name: "user1"
  });

  const user2 = await userController.createUser({
    email: "email2@email.com",
    password: "12345",
    name: "user2"
  });

};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Re-sync DB");
  run();
});

// initial route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pdf maker." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});