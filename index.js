const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT_NUMBER;
const URI = process.env.MONGO_URI;
const {
  createPetition,
  getAllPetitions,
  getPetitionById,
  upvotePetition,
  getVoters,
} = require("./controllers/petitions.controller");
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(express.json({ limit: "5mb" }));

mongoose.connect(URI).then((result) => {
  console.log("Mongoose Connected Successfully");
});

app.post("/", createPetition);
app.get("/", getAllPetitions);
app.put("/upvote", upvotePetition);
app.get("/voters", getVoters);
app.get("/:petitionId", getPetitionById);

app.listen(PORT, () => {
  console.log("APP Started on Port:", PORT);
});
