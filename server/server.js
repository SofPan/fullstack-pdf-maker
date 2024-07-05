require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');
const pool = require(__dirname + "/db/connection.js");

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const getUser = (req, res) => {
  pool.query('SELECT * FROM users', (error, users) => {
    if (error) {
      throw error
    }
    res.status(200).json(users.rows)
  })
};


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/users', getUser);

app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});