# Disallow division

Same as [no-float-calculation](./no-float-calculation.md) rule, integer operations may also produce decimals with wrong accuracy (e.g. `14 / 100 / 100`), so division should be disallowed by default in integer operations.

## Fail

```js
1 / 2
1 / 2 / 3

'1' / '2'
'1' / '2' / '3'

0.1 / 0.2
'0.1' / '0.2'

amount / 1
1 / amount
amount / count
```

## Pass

All scenarios that do not contain a divisor can be passed through the lint.
