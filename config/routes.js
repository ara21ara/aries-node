'use strict'
const path = require('path');

module.exports.init = initRoutes;

function initRoutes(app) {
  const routesPath = path.join(__dirname, '../app/routes');
  const routes = ['users', 'pets', 'reports'];

  routes.forEach((route) => (
    app.use(require(routesPath + '/' + route)) // API is important
  ))
}
