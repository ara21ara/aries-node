const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
const mongooseUniqueValidator = require('mongoose-unique-validator')

const petSchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  name: {
    type: String,
    required: true,
    unique: false
  },
  type: {
    type: String,
    required: true,
    unique: false,
    default: 'animal'
  },
  breed: {
    type: String,
    required: false,
    unique: false,
  },
  price: {
    type: Number,
    required: false,
    unique: false,
    default: 0
  },
  currency: {
    type: String,
    required: false,
    unique: false,
    default: 'euro'
  },
  user: {
    type: ObjectId,
    ref: 'user',
    required: true
  }
}, { timestamps: { currentTime: () => new Date().getTime() } })

petSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('pet', petSchema, 'pets')