##### 8/02/2019
# `Date.prototype.getTimezoneOffset()`

```js
const date1 = new Date('August 02, 2019 11:00:00 GMT+07:00')
const date2 = new Date('August 02, 2019 11:00:00 GMT-02:00')

console.log(date1.getTimezoneOffset()) // 240
console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset()) // true
```

---

## Syntax:
`dateObj.getTimezoneOffset()`

## Return value:
A `number` representing the time-zone offset, in minutes, from the date based on current host system settings to UTC.

---

## Description:
The `getTimezoneOffset()` method returns the time zone difference, in minutes, from current locale (host system settings) to UTC.

  > **NOTE**: This means that the offset is positive if the local timezone is behind UTC and negative if it is ahead.  For example, for time zone UTC+10:00 (Australian Eastern Standard Time, Vladivostok Time, Chamorro Standard Time), -600 will be returned.

| Current Locale | UTC-8 | UTC | UTC+3 |
|---|---|---|---|
| Return Value | 480 | 0 | -180 |

The time zone offset returned is the one that applies for the `Date` that it's called on.  Where the host system is configured for daylight savings, the offset will change depending on the date and time that the `Date` represents and that daylight saving applies.

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
| `getTimezoneOffset()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5**</span> | **IE** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)