#!/usr/bin/env node
import { program } from "commander";

program
   .command('key', 'Manage API key -- https://nomics.com')
   .command('check', 'check for the price')
   .parse(process.argv);

console.log("hello from coinline");
