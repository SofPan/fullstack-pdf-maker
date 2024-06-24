const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: "postgres",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model.js')(sequelize, Sequelize);
db.documents = require('./document.model.js')(sequelize, Sequelize);
db.sections = require('./section.model.js')(sequelize, Sequelize);


db.users.hasMany(db.documents, { as: "documents" });
db.documents.belongsTo(db.users, {
  foreignKey: "userId",
  as: "user"
});

db.documents.hasMany(db.sections, { as: "sections" });
db.sections.belongsTo(db.documents, {
  foreignKey: "documentId",
  as: "document"
});

module.exports = db;