##### 7/24/2019
# `Date.prototype.getMilliseconds()`

```js
const moonLanding = new Date('July 20, 1969 00:20:18')

moonLanding.setMilliseconds(123)

console.log(moonLanding.getMilliseconds()) // 123
```

---

## Syntax:
`dateObj.getMilliseconds()`

## Return value:
A `number` between 0 and 999, representing the milliseconds for the given date according to local time.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.3 |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)