module.exports = (sequelize, Sequelize) => {
  const Document = sequelize.define("document", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    hero_image: {
      type: Sequelize.STRING
    },
    background_color: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Document;
}
