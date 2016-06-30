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
    dyson.bootstrap.should.have.been.calledWith({
      configDir: 'mocks',
      port: '9300'
    });
  });
});