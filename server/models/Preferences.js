const { Schema, model } = require('mongoose');

const preferencesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
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