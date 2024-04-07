const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Player = sequelize.define("player", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING },
  score: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Player;
