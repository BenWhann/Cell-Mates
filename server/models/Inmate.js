const { Schema, model } = require('mongoose');

const inmateSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
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