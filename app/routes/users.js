'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');

router.get('/users', userCtrl.getUsers);

router.get('/users/:userId', userCtrl.getUsersById);

router.post('/users', userCtrl.createUser);

router.put('/users/:userId', userCtrl.updateUser);

router.delete('/users/:userId', userCtrl.deleteUser);

module.exports = router;
