const mongoose = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const { Schema, model } = mongoose;

const inmateSchema = new Schema({
  releaseDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp)
  },
  crime: {
    type: String,
    trim: true,
    minlength: 1,
    maxlength: 35
  },
  pastConvictions: {
    type: String
  }
});

const Inmate = model('Inmate', inmateSchema);

module.exports = Inmate;