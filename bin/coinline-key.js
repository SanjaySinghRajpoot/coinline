const  program = require('commander');
const key = require('../commands/key.js')

program
   .command('set')
   .description('Set API key -- Get at https://nomics.com')
   .action(key.set);

program
.command('show')
.description('Show API key -- Get at https://nomics.com')
.action(key.show);

program
.command('remove')
.description('remove API key -- Get at https://nomics.com')
.action(key.remove);

program.parse(process.argv);