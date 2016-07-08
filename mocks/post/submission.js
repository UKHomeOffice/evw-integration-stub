'use strict';

const success = require('../templates/submission/success');
const failure = require('../templates/submission/failure');
const switchCase = (body) => body.applicationReference === 'invalid' ? failure : success;

module.exports = {
  cache: false,

  path: '/submission',

  template: (params, query, body) => switchCase(body)
};