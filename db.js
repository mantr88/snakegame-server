const { Sequelize } = require("sequelize");

DB_NAME = process.env.DB_NAME;
console.log("DB_NAME: ", DB_NAME);
DB_USER_NAME = process.env.DB_USER_NAME;
DB_PASSWORD = process.env.DB_PASSWORD;
DB_HOST = process.env.DB_HOST;
DB_PORT = process.env.DB_PORT;

module.exports = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
});
