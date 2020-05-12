'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const serviceCtrl = require('../services/all');

router.get('/users', userCtrl.getUsers, serviceCtrl.responseToJSON('users'));

router.get('/users/:userId', userCtrl.getUsersById, serviceCtrl.responseToJSON('users'));

router.post('/users', userCtrl.createUser, serviceCtrl.responseToJSON('users'));

router.put('/users/:userId', userCtrl.updateUser, serviceCtrl.responseToJSON('users'));

router.delete('/users/:userId', userCtrl.deleteUser, serviceCtrl.responseToJSON('users'));

module.exports = router;
