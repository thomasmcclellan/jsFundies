##### 9/09/2019
# `Date.prototype.setUTCFullYear()`

```js
const event = new Date('September 9, 2019 09:00:00 GMT-4')

console.log(event.getUTCFullYear()) // 2019
console.log(event.toUTCString()) // Mon, 09 Sep 2019 13:00:00 GMT

event.setUTCFullYear(1975)

console.log(event.toUTCString()) // Tue, 09 Sep 1975 13:00:00 GMT
```

---

## Syntax:
`dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])`

* **yearValue**: `number` (specifically an int) specifying the numeric value of the year (i.e. 1995)
* **monthValue** (Optional): `number` (specifically an int) between 0 and 11, representing the months * 
* **dayValue** (Optional): `number` (specifically an int) between 1 and 31, representing the day of the month * 

  > *If you specify this parameter, you must also specify the previous one (i.e. specifying `dayValue` requires you to specify `monthValue` as well as `yearValue`).

## Return value:
A `number` representing the number of milliseconds between January 1, 1970, 00:00:00 UTC and the updated date.

---

## Description:
The `setUTCFullYear()` method sets the full year for a specified date according to 
universal time.

  > If you do not specify the `monthValue` and the `dayValue` parameters, the values returned from the `getUTCMonth()` and `getUTCDate()` methods are used.

  > If a parameter you specify is outside of the expected range, `setUTCFullYear()` attempts to update the other parameters and the date information in the `Date` object accordingly.  For example, if you specify 15 for `monthValue`, the year is incremented by 1 and 3 is used for month.

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
| `setUTCFullYear()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)