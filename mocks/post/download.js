var valid = require('../templates/evw/valid');

var checkValid = function checker (body) {
    if (body.passportNumber !== '1000INVALID') {
        valid.passportNumber = body.passportNumber;
        valid.dob = body.dob;
        return valid;
    } else {
        return {
            error: 'RECORDS_DO_NOT_MATCH'
        };
    }
};

var download = {

    cache: false,

    path: '/download/evw/:evwNumber/:token',

    template: function (params, query, body) {
        return checkValid(body);
    }
};

module.exports = download;