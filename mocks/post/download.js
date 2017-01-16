var valid = require('../templates/evw/valid');

var checkValid = function checker (body) {
  if (body.passportNumber !== '1000INVALID') {
    valid.passportNumber = body.passportNumber;
    valid.dob = body.dob;
    return valid;
  } else {
    return {
      error: 'PASSPORT_NUMBER_MATCH_ERR'
    };
  }
};

var download = {

  cache: false,

  path: '/download/evw/:evwNumber/:token',

  status: function(req, res) {
    if(req.body.passportNumber === '1000INVALID') {
      var response = checkValid(req.body);

      res.status(400).send(response);
    }
  },

  template: function (params, query, body) {
    return checkValid(body);
  }

};

module.exports = download;