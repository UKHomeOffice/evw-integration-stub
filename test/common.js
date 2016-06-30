'use strict';

require('chai').should();
let sinon = require('sinon');
let chai = require('chai');
let sinonChai = require('sinon-chai');

global.chai = chai.use(sinonChai);
global.sinon = sinon;