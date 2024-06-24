module.exports = (sequelize, Sequelize) => {
  const Entry = sequelize.define("entry", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    author: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.DECIMAL
    },
    cover_image: {
      type: Sequelize.STRING
    },
    sectionId: {
      type: Sequelize.INTEGER
    }
  });

  return Entry;
}
