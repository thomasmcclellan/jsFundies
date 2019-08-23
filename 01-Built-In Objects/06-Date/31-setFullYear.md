##### 8/21/2019
# `Date.prototype.setFullYear()`

```js
let event = new Date('August 21, 2019 09:00:00')

event.setFullYear(1969)

console.log(event.getFullYear()) // 1969

event.setFullYear(0)

console.log(event.getFullYear()) // 0
```

---

## Syntax:
`dateObj.setFullYear(yearValue[, monthValue[, dateValue]])`

* **yearValue**: `number` (specifically an int) specifying the numeric value of the year, for example, 1995
* **monthValue** (Optional): `number` (specifically an int) between 0 and 11, representing the months, January through December
* **dateValue** (Optional): `number` (specifically an int) between 1 and 31, representing the day of the month.  If you specify the `dateValue` parameter, you must also specify the `monthValue`

## Return value:
A `number` representing the number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

---

## Description:
The `setFullYear()` method sets the full year for a specified date according to local time.  Returns new timestamp.

  > If you do not specify the monthValue and dateValue parameters, the values returned from the `getMonth()` and `getDate()` methods are used.

  > If a parameter you specify is outside of the expected range, `setFullYear()` attempts to update the other parameters and the date information in the `Date` object accordingly. For example, if you specify 15 for `monthValue`, the year is incremented by 1 and 3 is used for the month.

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
| `setFullYear()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)