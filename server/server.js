require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');

const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on the port  ${PORT}`);
});