##### 8/19/2019
# `Date.prototype.setDate()`

```js
let event = new Date('August 19, 2019 09:00:00')

event.setDate(24)

console.log(event.getDate()) // 24

event.setDate(32)

console.log(event.getDate()) // 1
```

---

## Syntax:
`dateObj.setDate(dayValue)`

* **dayValue**: `number` (specifically an int) representing the day of the month 

## Return value:
A `number` representing the number of milliseconds between January 1, 1970 00:00:00 UTC and the given date (the `Date` object is also changed in place).

---

## Description:
The `setDate()` method sets the day of the `Date` object relative to the beginning of the currently set month.

  > If the `dayValue` is outside of the range of date values for the month, `setDate()` will update the `Date` object accordingly.  For example, if 0 is provided for `dayValue`, the date will be set to the last day of the previous month.  
  
  > If a negative number is provided for `dayValue`, the date will be set counting backwards from the last day of the previous month.  -1 would result in the date being set to 1 day before the last day of the previous month.

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
| `setDate()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)