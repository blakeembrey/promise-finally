# Promise Finally

[![NPM version](https://img.shields.io/npm/v/promise-finally.svg?style=flat)](https://npmjs.org/package/promise-finally)
[![NPM downloads](https://img.shields.io/npm/dm/promise-finally.svg?style=flat)](https://npmjs.org/package/promise-finally)
[![Build status](https://img.shields.io/travis/blakeembrey/promise-finally.svg?style=flat)](https://travis-ci.org/blakeembrey/promise-finally)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/promise-finally.svg?style=flat)](https://coveralls.io/r/blakeembrey/promise-finally?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/promise-finally.svg)](https://greenkeeper.io/)

> Simple wrapper to run promise "finally" logic.

## Installation

```
npm install promise-finally --save
```

## Usage

```js
import promiseFinally from 'promise-finally'

const p = Promise.resolve('something')

promiseFinally(p, () => ...)
```

## License

MIT
