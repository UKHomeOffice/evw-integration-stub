'use strict';

const dyson = require('dyson');
const config = require('../config');

const bootstrap = () => {
  dyson.bootstrap({
    port: config.integrationServiceUrl.split(':').pop(),
    configDir: 'mocks'
  });
};

module.exports = bootstrap;
