const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
console.log(dbConfig.USER)
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
    timezone: '+03:00',

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.customers = require("./customer.model.js")(sequelize, Sequelize);

module.exports = db;
