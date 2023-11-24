# Object deep merge

[![NPM version][npm-image]][npm-url] [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=coverage)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=bugs)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=hckrnews_deep-merge&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=hckrnews_deep-merge)

Deep merge objects.

Zero dependencies.

## Installation

`npm install @hckrnews/deep-merge`
or
`yarn add @hckrnews/deep-merge`

## Test the package

`npm run test`
or
`yarn test`

## How to use


```javascript
npm i @hckrnews/deep-merge

```

```javascript
import { deepMerge } from '@hcklrnews/deep-merge';

const obj1 = {
    a: 1,
    b: 1,
    c: { x: 1, y: 1 },
    d: [1, 1]
}
const obj2 = {
    b: 2,
    c: { y: 2, z: 2 },
    d: [2, 2],
    e: 2
}
const result = deepMerge(obj1, obj2)

const expectedResult = {
    a: 1,
    b: 2,
    c: { x: 1, y: 2, z: 2 },
    d: [1, 1, 2, 2],
    e: 2
}
```


[npm-url]: https://www.npmjs.com/package/@hckrnews/deep-merge
[npm-image]: https://img.shields.io/npm/v/@hckrnews/deep-merge.svg
