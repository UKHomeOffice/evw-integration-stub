'use strict';

const proxyquire = require('proxyquire');
let dyson = {
  bootstrap: sinon.spy()
};
let bootstrap = proxyquire('../../lib/bootstrap', {
  dyson: dyson
});

describe('bootstrap', function () {
  it('should exist', function () {
    bootstrap.should.exist;
  });

  it('calls dyson.bootstrap', function () {
    bootstrap();
    let called  = dyson.bootstrap.getCall(0).args[0]
    called.configDir.should.match(/evw-integration-stub\/mocks/);
    called.port.should.equal('9300');
  });
});