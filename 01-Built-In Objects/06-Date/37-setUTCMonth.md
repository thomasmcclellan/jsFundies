##### 9/06/2019
# `Date.prototype.setUTCMonth()`

```js
const event = new Date('September 6, 2019 09:00:00 GMT-4')

console.log(event.toUTCString()) // Fri, 06 Sep 2019 13:00:00 GMT
console.log(event.getUTCMonth()) // 8 (September)

event.setUTCMonth(11)
console.log(event.toUTCString()) // Fri, 06 Dec 2019 13:00:00 GMT
```

---

## Syntax:
`dateObj.setUTCMonth(monthValue[, dayValue])`

* **monthValue**: `number` (specifically an int) between 0 and 11, representing the months
* **dayValue** (Optional): `number` (specifically an int) between 1 and 31, representing the day of the month

## Return value:
A `number` representing the number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

---

## Description:
The `setUTCMonth()` method sets the month for a specified date according to universal time.

  > If you do not specify the `dayValue` parameter, the value returned from the `getUTCDate()` method is used.

  > If a parameter you specify is outside of the expected range, `setUTCMonth()` attempts to update the date information in the `Date` object accordingly. For example, if you use 15 for `monthValue`, the year will be incremented by 1, and 3 will be used for month.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.3 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `setUTCMonth()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth)