const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const preferencesSchema = new Schema({
    sex: {
      type: String,
      trim: true,
      maxLength: 1
    },
    Crime: {
        type: String,
        trim: true
    },
    SentenceTime: {
        type: Date,
        get: (timestamp) => dateFormat(timestamp),
    },
    Wanted: {
        type: String,
        trim: true
    }
  });

  const Preference = model('Peference', preferencesSchema);

module.exports = Preference;