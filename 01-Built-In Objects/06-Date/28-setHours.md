##### 8/19/2019
# `Date.prototype.setHours()`

```js
let event = new Date('August 19, 2019 09:00:00')

event.setHours(20)

console.log(event) // 2019-08-20T00:00:00.000Z

event.setHours(20, 21, 22)

console.log(event) // 2019-08-20T00:21:22.000Z
```

---

## Syntax:
### Current:
`dateObj.setHours(hoursValue [, minutesValue [, secondsValue [, msValue]]])`

### Prior to JS 1.3:
`dateObj.setHours(hoursValue)`

* **hoursValue**: `number` (specifically an int) between 0 and 23, representing the hour *
* **minutesValue** (Optional): `number` (specifically an int) between 0 and 59, representing the minute * **
* **secondsValue** (Optional): `number` (specifically an int) between 0 and 59, representing the second * **
* **msValue** (Optional): `number` (specifically an int) between 0 and 999, representing the millisecond * **

  > *If the value is greater than the specified value, the datetime will be incremented by the extra values (i.e. `hoursValue` is set to 25, datetime incrementeds one day + 2 hours).

  > **If you specify one of these parameters, you **MUST** provide the previous ones (i.e. if you provide `msValue`, you must have `hoursValue`, `minutesValue`, as well as `secondsValue`). 

## Return value:
A `number` representing the number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

---

## Description:
The `setHours()` method sets the hours for a specified date according to local time, and returns the number of milliseconds since 01 January, 1970 00:00:00 UTC until the time represented by the updated `Date` instance.

  > If you do not specify the `minutesValue`, `secondsValue`, and `msValue` parameters, the values returned from the `getMinutes()`, `getSeconds()`, and `getMilliseconds()` methods are used.

  > If a parameter you specify is outside of the expected range, `setHours()` attempts to update the date infomation in the `Date` object accordingly.  For example, if you use 100 for `secondsValue`, the minutes will be incremented by 1 and 40 will be used for seconds.

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
| `setHours()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)