const router = require('express').Router();
const { workout } = require('../models');
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.workout.find({})
  .then ()
})

module.exports = router;