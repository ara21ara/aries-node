'use strict'

module.exports = {
    userPetReports
};

function userPetReports(req, res, next) {
    const users = req.resources.users;
    const pets = req.resources.pets;
    const userPetData = users.concat(pets);
    req.resources.reports = userPetData;
    next()
}