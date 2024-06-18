const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user.model.js')(sequelize, Sequelize);
db.documents = require('./document.model.js')(sequelize, Sequelize);

db.users.hasMany(db.documents, { as: "documents" });
db.documents.belongsTo(db.users, {
  foreignKen: "userId",
  as: "user"
});

module.exports = db;