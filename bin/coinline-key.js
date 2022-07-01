const  program = require('commander');

program
   .command('set')
   .description('Set API key -- Get at https://nomics.com')
   .action(() => console.log('Hello from set'));

program.parse(process.argv);