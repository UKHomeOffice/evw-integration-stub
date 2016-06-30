'use strict';

const index = require('../index');

describe('index', function () {
  it('should exist', function () {
    index.should.exist;
    index.should.be.a('function');
  });
});