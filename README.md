# eslint-plugin-financial

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-financial.svg?style=flat)](https://npmjs.com/package/eslint-plugin-financial) [![NPM downloads](https://img.shields.io/npm/dm/eslint-plugin-financial.svg?style=flat)](https://npmjs.com/package/eslint-plugin-financial) ![Node.js CI](https://github.com/rich-lab/eslint-plugin-financial/workflows/Node.js%20CI/badge.svg) [![codecov](https://codecov.io/gh/rich-lab/eslint-plugin-financial/branch/master/graph/badge.svg)](https://codecov.io/gh/rich-lab/eslint-plugin-financial)


## Install

```bash
npm install eslint-plugin-financial --save-dev
```

## Usage

Configure it in `package.json`.

```json
{
  "name": "my-world",
  "eslintConfig": {
    "env": {
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "plugins": [
      "financial"
    ],
    "rules": {
      "financial/no-float-calculation": "error"
    }
  }
}
```

## Rules

[no-float-calculation](https://github.com/ulivz/eslint-plugin-financial/blob/master/docs/rules/no-float-calculation.md) - Disallow floating point calculation.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**eslint-plugin-financial** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>
