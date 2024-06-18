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

  return Document;
}
