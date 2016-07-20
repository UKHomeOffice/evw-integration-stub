'use strict';

const errorCase = function (num, token) {
  let errmap = {
    'expired': 'EXPIRED_TOKEN',
    'invalid': 'INVALID_TOKEN',
    'not-found': 'CASE_NOT_FOUND',
    'not-ready': 'CASE_NOT_VERIFIED'
  };

  if(num === 'valid' && token === 'token') {
    return false;
  }

  return {
    'error': errmap[token]
  };
};

const check = {

  path: '/check/update/:number/:token',

  template: function (params) {
    const num = params.number;
    const token = params.token;

    return errorCase(num, token);
  }
};

module.exports = check;
