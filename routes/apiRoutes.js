const router = require('express').Router();
const { Workout } = require('../models');
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  db.Workout.findOneAndUpdate({ _id: body.id },
    { $push: { exercises: body }}, 
    { new: true }, (err, workouts) => {
      if (err) throw err;
      res.json(workouts);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;