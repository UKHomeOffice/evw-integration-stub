'use strict';

const success = require('../templates/evw/evw-check-passport-image-update');

const errorCase = function (num, token) {
  let errmap = {
    'expired': 'CASE_EXPIRED',
    'invalid': 'INVALID_TOKEN',
    'not-found': 'CASE_NOT_FOUND',
    'not-ready': 'CASE_NOT_VERIFIED',
    'no-passport-update': 'NOT_AWAITING_NEW_PASSPORT_UPLOAD'
  };

  if(num === 'valid' && token === 'token') {
    return false;
  }

  return {
    'error': errmap[token]
  };
};

const check = {

  path: '/self-serve/verifyNewPassport/:number/:token',

  template: function (params) {
    const num = params.number;
    const token = params.token;

    return errorCase(num, token) || success;
  }
};

module.exports = check;
