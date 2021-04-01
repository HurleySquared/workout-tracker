const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of Exercise is Required"
      },

      name: {
        type: String,
        trim: true,
        required: "Exercise name required"
      },

      duration: {
        type: Number,
        trim: true,
        required: "Time of Exercises required"
      },

      distance: {
        type: Number,
        trim: true
      },

      weight: {
        type: Number,
        trim: true,
      },

      reps: {
        type: Number,
        trim: true
      },

      sets: {
        type: Number,
        trim: true
      }

    },
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;