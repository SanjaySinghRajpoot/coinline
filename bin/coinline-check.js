import { program } from 'commander';
import { check } from '../commands/check.js'

program
  .command('price')
  .description('Check price of coins')
  .option('--coin <type>', 'Add specific coin type', 'Format: ETH, XRP, BTC')
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action(cmd => check.price(cmd));


program.parse(process.argv);