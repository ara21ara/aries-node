'use strict'

const User = require('../models/users');

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser
};

// function firstMidFromGetUsers(req, res, next) {
//   console.log("firs mid from users");
//   next({ message: 'error from firstMid' });
// }
// function firstMidFromGetSettings(req, res, next) {
//   console.log("firs mid from settings");
//   next();
// }

// function getUsers(req, res, next) {
// function getUsers(req, res, next) {
//   console.log('QUERY', req.query);
//   return res.json({ data: 'Message success GET'});
// }

function getUsers(req, res, next) {
  User.find(function (err, result) {
    if (err) {
      return next(err)
    }

    return res.json({ data: result });
  })
}

function getUsersById(req, res, next) {
  User.find({ _id: req.params.userId }, function (err, result) {
    if (err) {
      return next(err)
    }

    return res.json({ data: result })
  })
}

function createUser(req, res, next) {
  const user = new User(req.body);

  user.save(function (err, result) {
    if (err) {
      return next(err)
    }

    return res.json({ data: result });
  })
}

function updateUser(req, res, next) {
  User.findOneAndUpdate({ _id: req.params.userId }, req.body, function (err, result) {
    if (err) {
      return next(err)
    }

    return res.json({ data: result })
  })
}

function deleteUser(req, res, next) {
  const userId = req.params.userId;
  User.findOneAndDelete({ _id: userId }, function (err, result) {
    if (err) {
      return next(err)
    }

    return res.json({ message: `User with id: ${userId} was deleted`, data: result });
  })
}
