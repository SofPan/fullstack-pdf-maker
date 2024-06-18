const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("document", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    hero_image: {
      type: Sequelize.STRING
    },
    background_color: {
      type: Sequelize.STRING
    },
  });

  Document.associate = (models) => {
    Document.hasOne(models.User, {
      foreignKey: 'users.id',
      as: "user_id"
    })
  }

  return Document;
}
