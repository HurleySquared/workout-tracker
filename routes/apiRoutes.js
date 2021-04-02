const router = require('express').Router();
const { Workout } = require('../models');
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findOneAndUpdate({ _id: params.id },
    { $push: { exercises: body }}, 
    { new: true }, (err, workouts) => {
      if (err) throw err;
      res.json(workouts);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({ body })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;