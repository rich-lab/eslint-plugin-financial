# eslint-plugin-financial

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-financial.svg?style=flat)](https://npmjs.com/package/eslint-plugin-financial) [![NPM downloads](https://img.shields.io/npm/dm/eslint-plugin-financial.svg?style=flat)](https://npmjs.com/package/eslint-plugin-financial) ![Node.js CI](https://github.com/rich-lab/eslint-plugin-financial/workflows/Node.js%20CI/badge.svg) [![codecov](https://codecov.io/gh/rich-lab/eslint-plugin-financial/branch/master/graph/badge.svg)](https://codecov.io/gh/rich-lab/eslint-plugin-financial)


## Install

```bash
npm install eslint-plugin-financial --save-dev
```

## Rules

[no-float-calculation](https://github.com/ulivz/eslint-plugin-financial/blob/master/docs/rules/no-float-calculation.md) - Disallow floating point calculation.
[no-division](https://github.com/ulivz/eslint-plugin-financial/blob/master/docs/rules/no-division.md) - Disallow division.

## Usage

### Lint javaScript

Configure it in `.eslintrc`:

```json
{
  "extends": [
    "plugin:financial/recommended"
  ]
}
```

All the recommended rules will throw errors. If you just want to throw warning, you can configure it as follows:

```json
{
  "plugins": [
    "financial"
  ],
  "rules": {
    "financial/no-float-calculation": "warn",
    "financial/no-division": "warn"
  }
}
```

### Lint TypeScript

You'll need install `@typescript-eslint/parser` and ` @typescript-eslint/eslint-plugin` first.

```bash
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

Configure it in `.eslintrc`:

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:financial/recommended"
  ]
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**eslint-plugin-financial** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>
