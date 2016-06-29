#!/usr/bin/env node

'use strict';

const path = require('path');
const spawn = require('child_process').spawn;
const colour = require('colour');
const config = require('../config');

if (process.env.INTEGRATION_SERVICE_URL === undefined) {
    throw new Error(`env variable INTEGRATION_SERVICE_URL must be set`);
}

let dysonPort = config.integrationServiceUrl.split(':').pop();

if (isNaN(dysonPort)) {
    throw new Error(`dysonPort must be a number, found ${dysonPort}`);
}

const cmd = spawn('node', ['./node_modules/.bin/dyson', path.resolve(__dirname, '../mocks'), dysonPort]);

cmd.stdout.on('data', function(data) {
    console.log(data.toString().green);
});

cmd.stderr.on('data', function(data) {
    console.error(data.toString().red);
});

cmd.on('close', function(code) {
    console.log(`child process exited with code ${code}`.yellow);
});
