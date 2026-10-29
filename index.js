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
 * //> 1.00 KB
 */
export const formatBytes = (bytes) => {
  // Handle non-number and non-finite values
  if (typeof bytes !== 'number' || !Number.isFinite(bytes)) return 'NaN';

  // Handle negative values
  if (bytes < 0) return "-" + formatBytes(-bytes);

  let i = 0;

  while (1023 < bytes) {
    bytes /= 1024;
    ++i;
  }

  return (i ? bytes.toFixed(2) : bytes) + " " + FORMATS[i];
};
