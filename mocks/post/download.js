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
    var resp = checkValid(req.body);
    if(req.body.passportNumber === '1000INVALID') {
      res.status(400);
    }
    res.send(resp);
  }

};

module.exports = download;