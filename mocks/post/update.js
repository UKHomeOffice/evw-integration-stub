'use strict';

const success = require('../templates/submission/success');
const details = [
  'membershipNumber',
  'token',
  'arrivalTravel',
  'arrivalDate',
  'arrivalTime',
  'departureForUKDate',
  'departureForUKTime',
  'portOfArrival',
  'portOfArrivalCode',
  'inwardDepartureCountry',
  'inwardDeparturePort',
  'inwardDeparturePortCode'
];

const invalid = (body) => {
  let err = false;
  details.map((detail) => {
    if(!body.hasOwnProperty(detail)) {
      err = {
        error: `missing property ${detail}`
      };
    }
  });

  if(body.token === 'invalid-token') {
    err = {
      error: 'invalid token'
    };
  }

  return err;
};

module.exports = {
  cache: false,

  path: '/update/journey-details',

  template: (params, query, body) => {
    return invalid(body) || success;
  }
};