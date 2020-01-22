'use strict';

const success = require('../templates/submission/login');

module.exports = {
  cache: false,

  path: '/auth/login',

  template: (params, query, body) => success
};
