##### 8/15/2019
# `Date.prototype.setSeconds()`

```js
const event = new Date('August 15, 2019 09:00:00')

event.setSeconds(42)

console.log(event.getSeconds()) // 42
console.log(event) // 2019-08-15T13:00:42.000Z
```

---

## Syntax:
### Current:
`dateObj.setSeconds(secondsValue[, msValue])`
### Prior to JS 1.3:
`dateObj.setSeconds(secondsValue)`

* **secondsValue**: `number` (specifically an int) between 0 and 59, representing seconds 
* **msValue** (Optional): `number` between 0 and 999, representing milliseconds  

## Return value:
A `number` representing the number of milliseconds between 01 January, 1970 00:00:00 UTC and the updated date.

---

## Description:
The `setSeconds()` method sets the second for a specified date according to local time.

  > If you do not sepcify the `msValue` parameter, the value returned from the `getMilliseconds()` method is used.

  > If a parameter you specify is outside of the expected range, `setSeconds()` attempts to update the date information in the `Date` object accordingly.  For example, if you use 100 for `secondsValue`, the minutes stored in the `Date` object will be incremented by 1, and 40 will be used for seconds.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.0 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `setSeconds()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)