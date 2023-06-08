const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER,
   dbConfig.PASSWORD, 
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.questions = require("./questions.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.articles = require("../models/articles.model.js")(sequelize, Sequelize);
db.answers = require("../models/answers.model.js")(sequelize, Sequelize);

// Relasi antar user dan articles yaitu one to many
db.articles.hasMany(db.user,{
  foreignKey: "user_id",
});
db.user.belongsTo(db.articles,{
  foreignKey: "user_id",
});

// Relasi antar user dan answers yaitu one to many
db.answers.hasMany(db.user,{
  foreignKey: "user_id",
});
db.user.belongsTo(db.answers,{
  foreignKey: "user_id",
});


module.exports = db;
