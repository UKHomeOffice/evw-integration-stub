'use strict';

const success = require('../templates/evw/evw-passport-image-update');

const invalid = (body) => {
  let err = false;

  if(body.passportFileId === 'invalid-file-id') {
    err = {
      error: 'invalid file ID'
    };
  }

  return err;
};

module.exports = {
  cache: false,

  path: '/self-serve/uploadNewPassport',

  template: (params, query, body) => {
    return invalid(body) || success;
  }
};
