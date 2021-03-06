##### 8/22/2019
# `Date.prototype.setUTCMilliseconds()`

```js
const date1 = new Date('2019-08-22T09:00:00.069Z')

console.log(date1.getUTCMilliseconds()) // 69

date1.setUTCMilliseconds(420)

console.log(date1.getUTCMilliseconds()) // 420
```

---

## Syntax:
`dateObj.setUTCMilliseconds(msValue)`

* **msValue**: `number` between 0 and 999, representing milliseconds

## Return value:
A `number` representing the number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

---

## Description:
The `setUTCMilliseconds()` method sets the milliseconds for a specified date according to universal time.

  > If a parameter you specify is outside of the expected range, `setUTCMilliseconds()` attempts to update the date information in the `Date` object accordingly.  For example, if you use 1100 for `msValue`, the seconds stored in the `Date` object will be incremented in by 1, and 100 will be used for milliseconds.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implmented in JS 1.3 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `setUTCMilliseconds()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds)