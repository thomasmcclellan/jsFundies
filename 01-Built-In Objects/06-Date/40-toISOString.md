##### 9/11/2019
# `Date.prototype.toISOString()`

```js
const event = new Date('11 September 2019 09:00 UTC')

console.log(event.toString()) // Wed Sep 11 2019 05:00:00 GMT-0400 (Eastern Daylight Time)
console.log(event.toISOString()) // 2019-09-11T09:00:00.000Z
```

---

## Syntax:
`dateObj.toISOString()`

## Return value:
A `string` representing the given date in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format according to universal time.

---

## Description:
The `toISOString()` method returns a string in _simplified_ extended `ISO format` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)), which is always 24 or 27 characters long (`YYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectively).  The timezone is always zero UTC offset, as denoted by the suffix 'Z'.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.8 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toISOString()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)