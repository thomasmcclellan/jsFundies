##### 7/18/2019
# `Date.now()`

```js
// This example takes 2 seconds to run...
const start = Date.now();

console.log('Starting timer...') // Starting timer...

setTimeout(() => {
  const millis = Date.now() - start
  const round = Math.floor(millis / 1000)

  console.log(`Seconds elapsed = ${ round }`) // Seconds elapsed = 2
}, 2000)
```

---

## Syntax:
`Date.now()`

## Return value:
A `number` representing the milliseconds elapsed since the `UNIX Epoch`.

---

## Description:
The `Date.now()` method returns the number of milliseconds elapsed since 1 January, 1970, 00:00:00, UTC.

  > Because `now()` is a static method of `Date`, you always use it as `Date.now()`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.5 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)