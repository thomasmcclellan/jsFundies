##### 9/10/2019
# `Date.prototype.toString()`

```js
const event = new Date('September 10, 2019 09:30:05')

console.log(event.toString()) // Tue Sep 10 2019 09:30:05 GMT-0400 (Eastern Daylight Time)
```

---

## Syntax:
`dateObj.toString()`

## Return value:
A `string` representing the given date.

---

## Description:
The `toString()` method returns a `string` representing the specified `Date` object.

`Date` instances inherit their `toString()` method from `Date.prototype`, not `Object.prototype`.  `Date.prototype.toString()` returns a `string` representation of the `Date` in the format specified in `ECMA-262`, which can be summarized as:
|||
|---|---|
| Week day | 3 letter English week day name, e.g. 'Tue' | 
| _space_ ||
| Month name | 3 letter English month name, e.g. 'Sep' |
| _space_ ||
| Date | 2 digit day in month, e.g. '10' |
| _space_ ||
| Year | 4 digit year, e.g. '2019' |
| _space_ ||
| Hour | 2 digit hour of day, e.g. '09' |
| _colon_ ||
| Minute | 2 digit minute of hour, e.g. '30' |
| _colon_ ||
| Second | 2 digit second of minute, e.g. '05' |
| _space_ ||
| Timezone | The `string` 'GMT' |
| Timezone offset sign | Either '+' for positive offset (>= 0), or '-' for negative offset (< 0) |
| Hour offset | 2 digit hour offset, e.g. '04' |
| Minute offset | 2 digit minute offset, e.g. '00' |
| _space_ (Optional) ||
| Representation of timezone (Optional) | An implementation dependent `string` representation of the timezone, which might be an abbreviation or full name, surrounded with '()', e.g. '(Eastern Daylight Time)' | 

Example: `Tue Sep 10 2019 09:00:00 GMT-0400 (Eastern Daylight Time)`

Until `ECMAScript 2018` (edition 9), the format of the string returned by `Date.prototype.toString()` was implementation dependent.  Therefore it should not be relied pon to be int he specific format.

The `toString()` method is automatically called when a date is to be represented as a text value, i.e. `console.log(new Date())`, or when a date is used in a string concatenation, such as `var today = 'Today is ' + new Date()`.

`toString()` is a generic method; it does not require that its `this` is a `Date` instance.  However, it must have an internal `[[TimeValue]]` property that can't be constructed using native JS, so it's effectively limited to use with `Date` instances.  If called on a non-`Date` instance, a `TypeError` is thrown.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.0 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard | Format of `Date.prototype.toString()` is standardized |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `toString()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)