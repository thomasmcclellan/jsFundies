##### 7/22/2019
# `Date.UTC()`

```js
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5))
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0))

console.log(utcDate1.toUTCString()) // Fri, 02 Feb 1996 03:04:05 GMT
console.log(utcDate2.toUTCString()) // Sun, 31 Dec 1899 00:00:00 GMT
```

---

## Syntax:
### ECMAScript 2017 and Later:
`Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])`

### ECMAScript 2016 and Earlier:
`Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])`

* **year**: a full year 
* **month** (Optional * ): integer between 0 (January) and 11 (December) representing the month
* **day** (Optional): integer between 1 adn 31 representing the day of the month.  If omitted, the default is 1. 
* **hour** (Optional): integer between 0 and 23 representing the hours.  If omitted, the default is 0. 
* **minute** (Optional): integer between 0 and 59 representing the minutes.  If omitted, the default is 0. 
* **seconds** (Optional): integer between 0 and 59 representing the seconds.  If omitted, the default is 0. 
* **milliseconds** (Optional): integer between 0 and 999 representing the milliseconds.  If omitted, the default is 0. 

  > *Up through ES 2016, `month` was a required parameter; as of ES 2017, it no longer is.

## Return value:
A `number` representing the number of milliseconds for the given date since 1 January, 1970, 00:00:00, UTC.

---

## Description:
the `Date.UTC()` method accepts parameters similar to the `Date` constructor, but treats them as `UTC`.  It returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC.

`UTC` takes comma, delimited date and time parameters and returns the number of milliseconds between 1 January, 1970, 00:00:00, UTC.

Years between 0 and 99 are converted to a year in the 20th century (1900 + `year`); i.e. 95 = 1995.

The `UTC()` method differs from the `Date` constructor in two ways:
* `Date.UTC()` uses universal time instead of local time
* `Date.UTC()` returns a time value as a number instead of creating a `Date` object

  > If a parameter is outside of the expected range, the `UTC()` method updates the other parameters to accommodate the value.  For example, if 15 is used for month, the year will be incremented by 1 (`year` + 1) and 3 will be used for month.

`UTC` is a static method of `Date`, so it's called as `Date.UTC()` rather than as a method of a `Date` instance.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.0 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `UTC()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)