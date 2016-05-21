'use strict';

var eslint = require('eslint');

var cli = new eslint.CLIEngine();
cli.getConfigForFile('foo.js');
