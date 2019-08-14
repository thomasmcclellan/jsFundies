##### 7/19/2019
# `Date.parse()`

```js
const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT')
const javascriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT')

console.log(unixTimeZero) // 0
console.log(javascriptRelease) // 818035920000
```

---

## Syntax:
### Direct Call:
`Date.parse(dateString)`

### Indirect Call:
`new Date(dateString)`

* **dateString**: string representing a simplification of the ISO 8601 calendar date extended format (other formats may be used, but results are implementation-dependent).

## Return value:
A `number` representing the milliseconds elapsed since 1 January, 1970, 00:00:00, UTC and the date obtained by parsing the given string representation of a date.  If the argument doesn't represent a valid date, `NaN` is returned.

---

## Description:
The `Date.parse()` method parses a string representation of a date, and returns the `number` of milliseconds since 1 January, 1970, 00:00:00, UTC, or `NaN` if the string is unrecognized, or, in some cases, contains illegal date values (i.e. 2015-02-31).  

  > It is not recommended to use `Date.parse()` as until `ES5`, parsing of strings was entirely implementation dependent.  There are still many differences in how different hosts parse date strings, therefore date strings should be manually parsed (a library can help if many different formats are to be accommodated).

The `parse()` method takes a date string (i.e. `'2011-10-10T14:48:00'`) and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC.  This function is useful for setting date values based on string values, for example, in conjunction with the `setTime()` method and the `Date` object.

### Date Time String Format:
The standard string representation of a date time string is a simplication of the ISO 8601 calendar [date extended format](https://tc39.es/ecma262/#sec-date-time-string-format), of '2011-10-10T14:48:00.000+09:00' (date-time form with milliseconds and time zone) can be passed and will be parsed.  When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.

  > While time zone specifiers are used during date string parsing to interpret the argument, the value returned is always the number of milliseconds between 1 January, 1970, 00:00:00, UTC and the point in time represented by the argument, or `NaN`.

  > Because `parse()` is a static method of `Date`, it is called as `Date.parse()`, rather than as a method of a `Date` instance.

### Fall-Back to Implementation-Specific Date Formats:
  > **NOTE**: This section contains implementation-specific behavior that can be inconsistent across implementations.

The `ECMAScript` specification states:

  > If the `string` does not conform to the standard format the function may fall back to any implementation-specific heuristics or implementation-specific parsing algorithm.  Unrecognizable strings or dates containing illegal element values in ISO formatted strings shall cause `Date.parse()` to return `NaN`.

However, invalid values in date strings not recognized as simplified ISO format as defined b `ECMAScript-262` may or may not result in `NaN`, depending on the browser and values provided, i.e.: 

```js
// Non-ISO string with invalid date values
new Date('23/25/2014')
```

will be treated as a local date of 25 November, 2015 in Firefox 30 and an invalid date in Safari 7.  However, if the string is recognized as an ISO format string and it contains invalid values, it will return `NaN` in all browsers compliant with `ES5` or later.

```js
// ISO string with invalid values
new Date('2014-25-23').toISOString() // RangeError: invalid date in all es5 compliant browsers
```

```js
new Date('10 06 2014')
```

will be treated as a local date of 6 October, 2014, not 10 June 2014.

### Differences in Assumed Time Zone:
  > **NOTE**: This section contains implementation-specific behavior that can be inconsistent across implementations.

Given a non-standard date string of 'March 7, 2014', `parse()` assumes a local time zone, but given a simplication of the ISO 8601 calendar date extended format such as '2014-03-07', it will assume a time zone of UTC (`ES5` and `ECMAScript 2015`).  Therefore `Date` objects produced using those strings may represent different moments in time depending on the version of `ECMAScript` supported unless the system is set with a local time zone of UTC.  This means that two date strings that appear equivalent may result in two different values depending on the format of the string that is being converted.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.0 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard | Simplified ISO 8601 format added. |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `parse()` | ISO 8601 Format | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)