const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const inmateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  releaseDate: {
    type: Date,
    get: (date) => Date.parse(date)
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


const userSchema = new Schema({
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  age: {
    type: Number
  },
  sex: {
    type: String,
      trim: true,
      maxLength: 1
  },
  location: {
    type: String,
    trim: true
  },
  profilePic: {
    type: String,
    trim: true
  },
  isInmate: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    minlength: 3,
    maxLength: 250
  },
   matches: 
     [ {
       type: Schema.Types.ObjectId,
       ref: 'User'
   }],
   likes: 
     [ {
       type: Schema.Types.ObjectId,
       ref: 'User'
   }],
   inmate: inmateSchema,
   preference: preferencesSchema
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;