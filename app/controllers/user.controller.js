const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create a new user
exports.createUser = (user) => {
  return User.create({
    email: user.email,
    password: user.password,
    name: user.name
  })
    .then(user => {
      console.log(">> Created user: " + JSON.stringify(user, null, 4));
      return user;
    })
    .catch(err => console.log(">> Error while creating user: ", err));
};

// Retrieve a user by id
exports.findOne = (req, res) => {

};

// Update a User by the id in the request
exports.update = (req, res) => {

};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};