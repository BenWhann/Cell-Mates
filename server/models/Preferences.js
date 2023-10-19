const { Schema, model } = require('mongoose');

const preferencesSchema = new Schema({
    sex: {
        type: String,
        trim: true,
        maxLength: 1
    },
    wanted: {
        type: String,
        trim: true
    }
});

const Preference = model('Peference', preferencesSchema);

module.exports = Preference;