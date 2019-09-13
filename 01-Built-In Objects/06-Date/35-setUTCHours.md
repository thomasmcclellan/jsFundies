##### 9/04/2019
# `Date.prototype.setUTCHours()`

```js
const event = new Date('September 4, 2019 09:00:00 GMT-4')

console.log(event.toUTCString()) // Thu, 04 Sep 2019 13:00:00 GMT
console.log(event.getUTCHours()) // 13

event.setUTCHours(23)

console.log(event.toUTCString()) // Thu, 05 Sep 2019 23:00:00 GMT
```

---

## Syntax:
`dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])`

* **hoursValue**: `number` (specifically and int) between 0 and 23, representing the hour 
* **minutesValue** (Optional): `number` (specifically and int) between 0 and 59, representing the minutes *
* **secondsValue** (Optional): `number` (specifically and int) between 0 and 59, representing the seconds *
* **msValue** (Optional): `number` (specifically and int) between 0 and 23, representing the milliseconds *

  > *If you specify this value, you must also specify the previous one (i.e. specifying `msValue`, you must also specify `secondsValue` and `minutesValue`).

## Return value:
A `number` representing the number of milliseconds between January 1 1970, 00:00:00 UTC and the updated date.

---

## Description:
The `setUTCHours()` method sets the hour for a specified date according to universal time, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC until the time represented by the updated `Date` instance.

  > If you do not specify the minutesValue, secondsValue, and msValue parameters, the values returned from the `getUTCMinutes()`, `getUTCSeconds()`, and `getUTCMilliseconds()` methods are used.

  > If a parameter you specify is outside of the expected range, `setUTCHours()` attempts to update the date information in the `Date` object accordingly. For example, if you use 100 for `secondsValue`, the minutes will be incremented by 1 and 40 will be used for seconds.

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
| `setUTCHours()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCHours)