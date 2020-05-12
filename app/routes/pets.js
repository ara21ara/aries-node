'use strict'

const express = require('express');
const router = express.Router();
const petCtrl = require('../controllers/pets');
const serviceCtrl = require('../services/all');

router.get('/pets', petCtrl.getPets, serviceCtrl.responseToJSON('pets'));

router.get('/pets/:petId', petCtrl.getPetById, serviceCtrl.responseToJSON('pets'));

router.post('/pets', petCtrl.createPet, serviceCtrl.responseToJSON('pets'));

router.put('/pets/:petId', petCtrl.updatePet, serviceCtrl.responseToJSON('pets'));

router.delete('/pets/:petId', petCtrl.deletePet, serviceCtrl.responseToJSON('pets'));

module.exports = router;
