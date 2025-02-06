# Bytes Formatter [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Bytes%20formatter%20module.&url=https://github.com/vpodk/bytes-formatter&via=GitHub&hashtags=JavaScript,ECMAScript,ES6)

[![Build Status](https://github.com/vpodk/bytes-formatter/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/vpodk/bytes-formatter/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter) [![NPM downloads](https://img.shields.io/npm/dm/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter)

Bytes formatter module.

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
console.log(formatBytes(1024)); // 1.0 KB
```
