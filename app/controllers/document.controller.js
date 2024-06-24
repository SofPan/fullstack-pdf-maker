const db = require("../models");
const Document = db.documents;
const Op = db.Sequelize.Op;

// Create a new document

exports.createDocument = (document) => {
  return Document.create({
    title: document.title,
    description: document.description,
    hero_image: document.hero_image,
    background_color: document.background_color,
    userId: document.userId
  })
    .then(document => {
      console.log(">> Created document: " + JSON.stringify(document, null, 4));
      return document;
    })
    .catch(err => console.log(">> Error while creating document: ", err));

};

// Find all documents
exports.findAll = (req, res) => {

}

// Retrieve one document by id
exports.findOne = (req, res) => {

};

// Update a Document by the id in the request
exports.update = (req, res) => {

};

// Delete a Document by id in the request
exports.delete = (req, res) => {

};