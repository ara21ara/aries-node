'use strict'

const User = require('../models/users');

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
};

function getUsers(req, res, next) {
  User.find(function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.users = result;
    next();
  })
}

function getUsersById(req, res, next) {
  User.find({ _id: req.params.userId }, function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.users = result;
    next();
  })
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.users = result;
    next();
  })
}

function updateUser(req, res, next) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, function (err, result) {
    if (err) {
      return next(err)
    }

    req.resources.users = result;
    next();
  })
}

function deleteUser(req, res, next) {
  const userId = req.params.userId;
  User.findOneAndDelete({ _id: userId }, function (err, result) {
    if (err) {
      return next(err)
    }
    
    req.resources.users = result;
    next();
  })
}
