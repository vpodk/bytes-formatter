import * as assert from 'assert';
import {formatBytes} from 'bytes-formatter';

const runTests = () => {
  assert.strictEqual(formatBytes(1000), '1000 bytes');
  assert.strictEqual(formatBytes(1024), '1.00 KB');
  assert.strictEqual(formatBytes(1e6), '976.56 KB');
  assert.strictEqual(formatBytes(2e6), '1.91 MB');
  assert.strictEqual(formatBytes(2e9), '1.86 GB');
  assert.strictEqual(formatBytes(2e12), '1.82 TB');
  assert.strictEqual(formatBytes(Number.MAX_SAFE_INTEGER), '8.00 PB');
  assert.strictEqual(formatBytes(-1024), '-1.00 KB');
  assert.strictEqual(formatBytes(Infinity), 'NaN');
  assert.strictEqual(formatBytes(NaN), 'NaN');
  assert.strictEqual(formatBytes('1000'), 'NaN');
  assert.strictEqual(formatBytes(true), 'NaN');
};

runTests();
