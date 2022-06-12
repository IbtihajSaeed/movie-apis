const dbConfig = require("../config/db.config.js");
const Sequelize =require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,
    logging: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  });
const createGenereTable= new require("../models/genere.model.js");
const createMovieTable= new require("../models/movie.model.js");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.genere = createGenereTable(sequelize, Sequelize);
db.movie = createMovieTable(sequelize, Sequelize);

module.exports = db;