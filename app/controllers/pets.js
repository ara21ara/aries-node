'use strict'

const Pet = require('../models/pets');

module.exports = {
  getPets,
  getPetById,
  createPet,
  updatePet,
  deletePet
};

function getPets(req, res, next) {
  Pet
    .find()
    .populate('user', 'name email')
    .exec(function (err, result) {
      if (err) {
        return next(err)
      }

      req.resources.pets = result;
      next();
    })
}

function getPetById(req, res, next) {
  const petId = req.params.petId;
  Pet
    .find({ _id: petId })
    .populate('user', 'name email')
    .exec(function (err, result) {
      if (err) {
        console.log('err', err)
      }

      req.resources.pets = result;
      next();
    })
}

function createPet(req, res, next) {
  const pet = new Pet(req.body);

  pet.save(function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.pets = result;
    next();
  })
}

function updatePet(req, res, next) {
  const petId = req.params.petId;
  Pet.findOneAndUpdate({ _id: petId }, req.body, function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.pets = result;
    next();
  })
}

function deletePet(req, res, next) {
  const petId = req.params.petId;
  Pet.findOneAndDelete({ _id: petId }, function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.pets = result;
    next()
  })
}