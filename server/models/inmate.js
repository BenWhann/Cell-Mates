const mongoose = require('mongoose');

const { Schema } = mongoose;

const inmateSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    }
  });

  const Inmate = mongoose.model('Inmate', inmateSchema);

module.exports = Inmate;