# Disallow floating point calculation

Since all JavaScript numbers are [IEEE 754 floating point numbers](https://en.wikipedia.org/wiki/IEEE_754), due to the binary nature of their encoding, some decimal numbers cannot be represented with perfect accuracy, so using floating point calculation in JavaScript is very dangerous ([Related post](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)).

## Fail

```js
0.1 + 2
1 + 0.2
0.1 + 0.2

0.1 - 2
1 - 0.2
0.1 - 0.2

0.1 * 2
1 * 0.2
0.1 * 0.2

0.1 / 2
1 / 0.2
0.1 / 0.2
```

## Pass

```typescript
1 + 2
1 + 2 + 3
1 - 2
1 - 2 - 3
1 * 2
1 * 2 - 3
1 / 2
1 / 2 / 3
```
