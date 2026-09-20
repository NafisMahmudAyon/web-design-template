import { updateTemplateStatus } from './api.js';

async function main() {
  const args = process.argv.slice(2);
  const rowIdx = args.indexOf('--row');
  const statusIdx = args.indexOf('--status');

  if (rowIdx === -1 || !args[rowIdx + 1]) {
    console.error('❌ Missing required argument: --row <number>');
    console.log('Usage: node scripts/update-status.js --row 2 [--status Completed]');
    process.exit(1);
  }

  const rowNumber = parseInt(args[rowIdx + 1], 10);
  const status = statusIdx !== -1 && args[statusIdx + 1] ? args[statusIdx + 1] : 'Completed';

  const result = await updateTemplateStatus(rowNumber, status);
  if (result.success) {
    console.log(`\n🎉 Row ${rowNumber} successfully updated to status: '${status}'.`);
  } else {
    console.error(`\n❌ Failed to update row ${rowNumber}.`);
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
