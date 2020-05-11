'use strict'

const express = require('express');
const router = express.Router();
const petCtrl = require('../controllers/pets');

router.get('/pets', petCtrl.getPets);

router.get('/pets/:petId', petCtrl.getPetById);

router.post('/pets', petCtrl.createPet);

router.put('/pets/:petId', petCtrl.updatePet);

router.delete('/pets/:petId', petCtrl.deletePet);

module.exports = router;
