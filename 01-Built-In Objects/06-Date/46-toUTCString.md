##### 9/19/2019
# `Date.prototype.toUTCString()`

```js
const event = new Date('19 Sep 2019 09:00:00 EST')

console.log(event.toUTCString()) // Thu, 19 Sep 2019 14:00:00 GMT
```

---

## Syntax:
`dateObj.toUTCString()`

## Return value:
A `string` representing the given date using the UTC time zone.

---

## Description:
The `toUTCString()` method converts a date to a string, using the UTC time zone.

  > The value returned by `toUTCString()` is a `string` in the same format as `Date.prototype.toString()` but with a zero timezone offset (UTC).

  > Prior to `ECMAScript 2018`, the format of the return value varied according to the platform.  The most common return value was an `RFC-1123` formatted date stamp, which is a slightly updated version of `RFC-822` date stamps.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.3.  Format is implementation dependent |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript 2018 | 2018 | Standard | First standardization of the format. |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toUTCString()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)