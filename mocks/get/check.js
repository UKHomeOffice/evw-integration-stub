// check evw-number and token are valid, attached to e.g.
// http://localhost:3018/download/evw/valid/token

'use strict';

const errorCase = function (num, token) {
  let errmap = {
    'expired': 'EXPIRED_TOKEN',
    'invalid': 'INVALID_TOKEN',
    'not-found': 'CASE_NOT_FOUND',
    'not-ready': 'DOWNLOAD_NOT_READY'
  };

  if(num === 'valid' && token === 'token') {
    return false;
  }

  return {
    'error': errmap[token]
  };
};

const check = {

  path: '/check/evw/:number/:token',

  template: function (params) {
    const num = params.number;
    const token = params.token;

    return errorCase(num, token);
  }
};

module.exports = check;
