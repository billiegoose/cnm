#!/usr/bin/env node
'use strict';

var _shelljs = require('shelljs');

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _commandLineArgs = require('command-line-args');

var _commandLineArgs2 = _interopRequireDefault(_commandLineArgs);

var _commandLineUsage = require('command-line-usage');

var _commandLineUsage2 = _interopRequireDefault(_commandLineUsage);

var _applicationConfigPath = require('application-config-path');

var _applicationConfigPath2 = _interopRequireDefault(_applicationConfigPath);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pkg = require('../../package.json');
var configfile = _path2.default.join((0, _applicationConfigPath2.default)(pkg.name), 'settings.json');

try {
  var config = require(configfile);
} catch (e) {
  var config = {
    github: false,
    travis: false,
    ava: false,
    coveralls: false
  };
}

const optionDefinitions = [{ name: 'help', type: Boolean, description: 'Display this help message', alias: 'h' }, { name: 'update', type: Boolean, description: 'Update the module in the working dir', alias: 'u' }, { name: 'name', type: String, description: 'The name of your module', alias: 'n', defaultOption: true }, { name: 'description', type: String, description: 'A one-line project description', alias: 'd' }, { name: 'dryrun', type: Boolean, description: 'Do a dry run' }, { name: 'github', type: Boolean, description: 'Create this repo on Github', alias: 'g' }, { name: 'travis', type: Boolean, description: 'Setup Travis CI for this module', alias: 't' }, { name: 'ava', type: Boolean, description: 'Setup Ava for tests', alias: 'a' }, { name: 'coveralls', type: Boolean, description: 'Setup Coveralls for test coverage', alias: 'c' }, { name: 'save-default', type: Boolean, description: 'Modify the default values for -g -t -a -c' }];
const usageDefinitions = [{
  header: 'Usage:',
  content: [{ cmd: 'cnm [-gcat] -n <name> -d <description>', help: 'Create a new module' }, { cmd: 'cnm -u [-gcat] -n <name> -d <description>', help: 'Update the current module.' }, { cmd: 'cnm --save-default -gt', help: 'Enable Github and Travis by default' }, { cmd: 'cnm --save-default -gcat', help: 'Enable everything by default' }, { cmd: 'cnm --save-default', help: 'Disable everything by default' }]
}, {
  header: 'Options:',
  optionList: optionDefinitions
}];

let options = (0, _commandLineArgs2.default)(optionDefinitions);

if (options['save-default']) {
  let settings = {
    github: options.github,
    travis: options.travis,
    ava: options.ava,
    coveralls: options.coveralls
  };
  (0, _shelljs.mkdir)('-p', _path2.default.dirname(configfile));
  (0, _shelljs.echo)(JSON.stringify(settings, null, 2)).to(configfile);
} else {
  options.github = !!options.github || !!config.github;
  options.travis = !!options.travis || !!config.travis;
  options.ava = !!options.ava || !!config.ava;
  options.coveralls = !!options.coveralls || !!config.coveralls;
}

if (Object.keys(options).length === 0 || options.help) {
  console.log((0, _commandLineUsage2.default)(usageDefinitions));
  process.exit();
}

_2.default.run(options);