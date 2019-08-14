##### 8/14/2019
# `Date.prototype.setTime()`

```js
const event1 = new Date('October 28, 1987')
const event2 = new Date()

event2.setTime(event1.getTime())

console.log(event1) // 1987-10-28T05:00:00.000Z
console.log(event2) // 1987-10-28T05:00:00.000Z
```

---

## Syntax:
`dateObj.setTime(timeValue)`

* **timeValue**: `number` representing the number of milliseconds since 01 Jan, 1970, 00:00:00 UTC

## Return value:
A `number` representing the number of milliseconds between January 01, 1970, 00:00:00 UTC and the updated date (effectively, the value of the argument).

---

## Description:
The `setTime()` method sets the `Date` object to the time represented by a number of milliseconds since January 01, 1970, 00:00:00 UTC.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.0 |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)