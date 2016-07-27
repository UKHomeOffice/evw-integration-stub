'use strict';

const errMap = {
  'TOOLATEM8': 'CASE_EXPIRED',
  'NOTVERIFIED': 'CASE_NOT_VERIFIED',
  '1000INVALID': 'INVALID_TOKEN',
  'NOFOUND': 'CASE_NOT_FOUND'
};

const validate = (body) => {
  let num = body['membershipNumber'];
  let err = errMap[num];
  return err && {error: err} || {
    emailAddress: 'someone@example.com'
  };
};

const verify = {

  cache: false,

  path: '/verify/evw/',

  template: function (params, query, body) {
    return validate(body);
  }
};

module.exports = verify;