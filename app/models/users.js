const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  email: {
    type: String,
    required: [true, 'email field is required'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: false
  },
  activities: {
    type: Array,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: false,
    unique: false
  }
}, { timestamps: { currentTime: () => new Date().getTime() } })

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('user', userSchema, 'users')
