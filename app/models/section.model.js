module.exports = (sequelize, Sequelize) => {
  const Section = sequelize.define("section", {
    section_name: {
      type: Sequelize.STRING
    },
    documentId: {
      type: Sequelize.INTEGER
    }
  });

  return Section;
}
