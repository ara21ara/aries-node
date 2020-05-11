'use strict'

const express = require('express');
const app = express();

const config = require('./config');

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.use(function(err, req, res, next) {
  console.log('err', err);
  return res.status(400).json({
    status: 'error',
    message: `Error message: ${err}`,
  });
})

app.listen(config.PORT, function() {
  console.log(`API is running on port: ${config.PORT}`)
});
