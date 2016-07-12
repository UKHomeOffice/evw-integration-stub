'use strict';

const validate = (body) => {
  let num = body['membershipNumber'];
  if(num === '1000INVALID') {
    return {
      error: 'CASE_NOT_FOUND'
    };
  }
  if(num === 'TOOLATEM8') {
    return {
      error: 'CASE_NOT_UPDATABLE'
    };
  }
  return {
    success: true
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