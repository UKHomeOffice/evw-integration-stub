// Get EVW details

'use strict';

const evwDetails = require('../templates/evw/evw-self-serve-get');

const errorCase = function (num, token) {
  let errmap = {
    'expired': 'EXPIRED_TOKEN',
    'invalid': 'INVALID_TOKEN',
    'not-found': 'CASE_NOT_FOUND',
    'not-ready': 'DOWNLOAD_NOT_READY'
  };

  if (token in errmap) {
    return {
      'error': errmap[token]
    };
  }
  else if (num in errmap) {
    return {
      'error': errmap[num]
    };
  }
  else {
    return false;
  }


};

const check = {

  path: '/self-serve/get/:number/:token',

  template: function (params) {
    const num = params.number;
    const token = params.token;

    return errorCase(num, token) || evwDetails;
  }
};

module.exports = check;
