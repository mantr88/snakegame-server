const express = require("express");
require("dotenv").config();
const cors = require("cors");

const sequelize = require("./db");
const Player = require("./player_model");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/players", async function (req, res) {
  try {
    const { name } = req.body;

    const newPlayer = await Player.create({ ...req.body });
  } catch (error) {
    throw new Error(error);
  }
  res.status(201).json({ message: "New user successfully created!" });
});

app.patch("/players/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const { score } = req.body;

    const player = await Player.findOne({ where: { id } });

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    player.score = score;
    player.save();

    return res.status(201).json({
      message: `Score of player ${player.name} update successful.`,
    });
  } catch (error) {
    throw new Error(error);
  }
});

app.get("/players", async (req, res) => {
  try {
    const players = await Player.findAll();
    res.status(200).json({ players });
  } catch (error) {
    throw new Error(error);
  }
});
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
start();