#!/usr/bin/env node
'use strict';

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(require('../../package.json').version).usage('<project-name> [options]').option('-d, --description', 'A one-line project description').action((projectName, options) => {
  console.log('projectName =', projectName);
  console.log('options =', options);
}).parse(process.argv);