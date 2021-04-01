const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts";
const collections = ["excercises"];

const db = mongojs(databaseUrl, collections);
db.on("erro", error => {
  console.log("Database Error occurred:", error);
});

// Fill out routes for workouts