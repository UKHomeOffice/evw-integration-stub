'use strict';

const path = require('path');
const dyson = require('dyson');
const config = require('../config');

const bootstrap = () => {
  dyson.bootstrap({
    port: config.integrationServiceUrl.split(':').pop(),
    configDir: path.resolve(__dirname, '../mocks')
  });
};

module.exports = bootstrap;
