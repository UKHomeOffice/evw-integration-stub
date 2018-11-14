'use strict';

const success = require('../templates/evw/evw-self-serve-update');

const invalid = (body) => {
  let err = false;

  if(body.token === 'invalid-token') {
    err = {
      error: 'invalid token'
    };
  }

  return err;
};

module.exports = {
  cache: false,

  path: '/self-serve/update',

  template: (params, query, body) => {
    return invalid(body) || success;
  }
};
