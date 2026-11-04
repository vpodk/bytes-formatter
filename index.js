/**
 * @fileoverview Bytes formatter module
 *
 * @see https://google.github.io/styleguide/jsguide.html
 * @see https://google.github.io/styleguide/tsguide.html
 * @module bytes-formatter
 */

/**
 * @type {!Array<string>}
 * @inner
 */
const FORMATS = ["bytes", "KB", "MB", "GB", "TB", "PB"];

/**
 * Formats given <code>bytes</code> to human friendly format.
 * @param {number} bytes The bytes to be formatted.
 * @return {string} The formatted bytes as string.
 * @method
 * @example
 * import {formatBytes} from 'bytes-formatter';
 * formatBytes(1024);
 * //> 1.0 KB
 */
export const formatBytes = (bytes) => {
  // Handle non-number and non-finite values
  if (typeof bytes !== 'number' || !Number.isFinite(bytes)) return 'NaN';

  // Handle negative values
  if (bytes < 0) return "-" + formatBytes(-bytes);

  // Preserve negative zero.
  if (Object.is(bytes, -0)) return "-0 bytes";

  let i = 0;

  // Use a 1024 threshold to keep fractional-byte values bytes.
  while (1024 <= bytes) {
    // Stop at largest supported unit.
    if (i === FORMATS.length - 1) break;

    bytes /= 1024;
    ++i;
  }

  // Use 1 decimal for all units except bytes.
  const decimals = i > 0 ? 1 : 0;

  return (decimals ? bytes.toFixed(decimals) : bytes) + " " + FORMATS[i];
};
