#!/usr/bin/env node
'use strict';

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let GITHUB_REPO = process.argv[2];

console.log('Usage: cnm <project-name> [--description \"<description>\"]');
process.exit();

_2.default.run();