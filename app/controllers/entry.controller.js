const db = require("../models");
const Entry = db.entries;
const Op = db.Sequelize.Op;

// Create a new entry

exports.createEntry = (entry) => {
  return Entry.create({
    title: entry.title,
    description: entry.description,
    author: entry.author,
    rating: entry.rating,
    cover_image: entry.cover_image,
    sectionId: entry.sectionId
  })
    .then(entry => {
      console.log(">> Created entry: " + JSON.stringify(entry, null, 4));
      return entry;
    })
    .catch(err => console.log(">> Error while creating entry: ", err));

};

// Find all entries
exports.findAll = (req, res) => {

}

// Retrieve one entry by id
exports.findOne = (req, res) => {

};

// Update a entry by the id in the request
exports.update = (req, res) => {

};

// Delete a entry by id in the request
exports.delete = (req, res) => {

};