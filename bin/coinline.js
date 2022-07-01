#!/usr/bin/env node
const program = require("commander");
const package = require("../package.json");

program
   .version(package.version)
   .command('key', 'Manage API key -- https://nomics.com')
   .parse(process.argv);

console.log("hello from coinline");
