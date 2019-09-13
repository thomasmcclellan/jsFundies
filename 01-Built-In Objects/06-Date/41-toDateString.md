##### 9/12/2019
# `Date.prototype.toDateString()`

```js
const event = new Date(2019, 08, 12, 09, 30, 05)

console.log(event.toString()) // Thu Sep 12 2019 09:30:05 GMT-0400 (Eastern Daylight Time)
console.log(event.toDateString()) // Thu Sep 12 2019
```

---

## Syntax:
`dateObj.toDateString()`

## Return value:
A `string` representing the date portion of the given `Date` object in human readable form in English.

---

## Description:
The `toDateString()` method returns the date portion of a `Date` object in English in the following format separated by spaces:
  1. First 3 letters of the week day name
  2. First 3 letters of the month name
  3. 2 digit day of the month, padded on the left by a 0 if necessary
  4. 4 digit year, padded on the left with 0s if necessary

E.g. 'Thu Sep 12 2019'.

`Date` instances refer to a specific point in time.  Calling `toString()` will return the date formatted in a human readable form in English.  In [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), this consists of the date portion (day, month, and year) followed by the time portion (hours, minutes, seconds, and time zone).  Sometimes it is desirable to obtain a `string` of the time portion; such a thing can be accomplished with the `toTimeString()` method.

The `toDateString()` method is especially useful because compliant engines implementing `ECMA-262` may differ in the `string` obtained from `toString()` for `Date` objects, as the format is implementation-dependent and simple `string` slicing approaching may not produce consistent results across multiple engines.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toDateString()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString)