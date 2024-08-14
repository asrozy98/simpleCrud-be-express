const dbConfig = require("../config/database");

const Sequalize = require("sequelize");
const sequalize = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequalize = Sequalize;
db.sequalize = sequalize;

db.customer = require("./customer")(sequalize, Sequalize);

module.exports = db;
