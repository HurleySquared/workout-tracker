const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts";
const collections = ["excercises"];

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workouts")

// Fill out routes for workouts
app.use(require("/api.js"))

app.listen(3000, () => {
  console.log("App running on", PORT)
})