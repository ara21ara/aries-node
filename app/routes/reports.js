'use strict'

const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const petCtrl = require('../controllers/pets');
const reportCtrl = require('../controllers/reports')
const serviceCtrl = require('../services/all');

router.get('/userPetReports',
    userCtrl.getUsers,
    petCtrl.getPets,
    reportCtrl.userPetReports,
    serviceCtrl.responseToJSON('reports')
)

module.exports = router;