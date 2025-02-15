# Bytes Formatter [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Bytes%20formatter%20module.&url=https://github.com/vpodk/bytes-formatter&via=GitHub&hashtags=JavaScript,ECMAScript,ES6)

[![Build Status](https://github.com/vpodk/bytes-formatter/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/vpodk/bytes-formatter/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter) [![NPM downloads](https://img.shields.io/npm/dm/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter) ![npms.io](https://img.shields.io/npms-io/maintenance-score/bytes-formatter)

Bytes formatter module provides a function to format byte values into human-readable strings with appropriate units (bytes, KB, MB, GB, TB, PB).

## Usage

```bash
npm install bytes-formatter
# Or
yarn add bytes-formatter
```

```js
import { formatBytes } from "bytes-formatter";

/**
 * Formats given <code>bytes</code> to human friendly format.
 * @param {number} bytes The bytes to be formatted.
 * @return {string} The formatted bytes as string.
 */
console.log(formatBytes(1000)); // "1000 bytes"
console.log(formatBytes(1024)); // "1.00 KB"
console.log(formatBytes(1000000)); // "976.56 KB"
console.log(formatBytes(2000000)); // "1.91 MB"
console.log(formatBytes(2000000000)); // "1.86 GB"
console.log(formatBytes(2000000000000)); // "1.82 TB"
console.log(formatBytes(Number.MAX_SAFE_INTEGER)); // "8.00 PB"
```
