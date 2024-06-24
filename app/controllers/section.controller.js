const db = require("../models");
const Section = db.sections;
const Op = db.Sequelize.Op;

// Create a new section

exports.createSection = (section) => {
  return Section.create({
    section_name: section.section_name,
    documentId: section.documentId
  })
    .then(section => {
      console.log(">> Created section: " + JSON.stringify(section, null, 4));
      return section;
    })
    .catch(err => console.log(">> Error while creating section: ", err));
};

// Find all sections
exports.findAll = (req, res) => {

}

// Retrieve one section by id
exports.findOne = (req, res) => {

};

// Update a section by the id in the request
exports.update = (req, res) => {

};

// Delete a section by id in the request
exports.delete = (req, res) => {

};