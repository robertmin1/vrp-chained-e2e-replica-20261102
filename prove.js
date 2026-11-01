// Runs from the fork PR inside the base repo's secret-bearing step.
// Proves the secret is readable and leaves the runner past log masking. Canary values only.
const crypto = require('node:crypto');

const key = process.env.GEMINI_API_KEY || '';
if (!key) {
  console.log('GEMINI_API_KEY not present');
  process.exit(1);
}
console.log('length:', key.length);
console.log('sha256:', crypto.createHash('sha256').update(key).digest('hex'));
// Masking only matches the exact value; a reversed copy shows in the public log.
console.log('reversed:', [...key].reverse().join(''));
