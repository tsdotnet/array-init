![@tsdotnet/array-init: Pre-size arrays. A fixed length, ready to fill.](https://cdn.jsdelivr.net/gh/tsdotnet/array-init@master/assets/banner.svg)

[![npm version](https://img.shields.io/npm/v/@tsdotnet/array-init.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/array-init)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/array-init/blob/master/LICENSE)

Create an array of a given length, ready to fill.

## Install

```sh
npm install @tsdotnet/array-init
```

## Usage

```ts
import arrayInit from '@tsdotnet/array-init';

const row = arrayInit<number>(5); // length 5, ready to fill
row.length; // 5

for (let i = 0; i < row.length; i++) row[i] = i * i;
// [0, 1, 4, 9, 16]
```

## Use it from

ESM (`import arrayInit from '@tsdotnet/array-init';`) or CommonJS (`const arrayInit = require('@tsdotnet/array-init').default;`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/array-init@1/dist/umd/array-init.min.js"></script>
<script>
  const arrayInit = tsdotnet.arrayInit.default;
</script>
```

</details>

## Docs

[tsdotnet.github.io/array-init](https://tsdotnet.github.io/array-init/)
