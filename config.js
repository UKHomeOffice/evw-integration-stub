'use strict';

module.exports = {
  integrationServiceUrl: process.env.INTEGRATION_SERVICE_URL || 'http://localhost:9300',
  integrationServiceTimeout: process.env.INTEGRATION_SERVICE_TIMEOUT || 5000
};
