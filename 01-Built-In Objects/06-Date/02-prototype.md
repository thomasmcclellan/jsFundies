##### 7/18/2019
# `Date.prototype`
## Description:
The `Date.prototype` property represents the prototype for the `Date` constructor.

| Property attributes of `Date.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | yes |

JS `Date` instances inherit from `Date.prototype`.  You can modify the constructor's prototype object to affect properties and methods inherited by JS `Date` instances.

  > For compatibility with millennium calculations (i.e. year 2000), you should always specify the year in full (i.e. 2000, not 00).  To assist you in specifying the complete year, JS includes methods: `getFullYear()`, `setFullYear()`, `getUTCFullYear()`, `setUTCFullYear()`.

  > Starting with `ECMAScript 6`, the `Date.prototype` object is itself an ordinary object.  It is not a `Date` instance.

---

## Properties:
**`Date.prototype.constructor`**
  > Returns the function that created an instance.  This is the `Date` constructor by default.

## Methods: 
### Getter Methods:
**`Date.prototype.getTime()`**
  > Returns the numeric value of the specified date as the number of milliseconds since 1 January, 1970, 00:00:00, UTC (negative for prior times).

**`Date.prototype.getMilliseconds()`**
  > Returns the milliseconds (0-999) in the specified date according to local time.

**`Date.prototype.getSeconds()`**
  > Returns the seconds (0-59) in the specified date according to local time.

**`Date.prototype.getMinutes()`**
  > Returns the minutes (0-59) in the specified date according to local time.

**`Date.prototype.getHours()`**
  > Returns the hour (0-23) in the specified date according to local time.

**`Date.prototype.getDate()`**
  > Returns the day of the month (1-31) for the specified date according to local time. 

**`Date.prototype.getDay()`**
  > Returns the day of the week (0-6) for the specified date according to the local time.  

**`Date.prototype.getMonth()`**
  > Returns the month (0-11) in the specified date according to local time.

**`Date.prototype.getFullYear()`**
  > Returns the year (4 digits for 4-digit years) of the specified date according to local time.

**`Date.prototype.getTimezoneOffset()`**
  > Returns the time-zone offset in minutes for the current locale. 

**`Date.prototype.getUTCMilliseconds()`**
  > Returns the milliseconds (0-999) in the specified date according to universal time.

**`Date.prototype.getUTCSeconds()`**
  > Returns the seconds (0-59) in te specified date according to universal time.

**`Date.prototype.getUTCMinutes()`**
  > Returns the minutes (0-59) in the specified date according to universal time.

**`Date.prototype.getUTCHours()`**
  > Returns the hours (0-23) in the specified date according to universal time.

**`Date.prototype.getUTCDate()`**
  > Returns the day (date) of the month (1-31) in the specified date according to universal time.

**`Date.prototype.getUTCDay()`**
  > Returns the day of the week (0-6) in the specified date according to universal time.

**`Date.prototype.getUTCMonth()`**
  > Returns the month (0-11) in the specified date according to universal time.

**`Date.prototype.getUTCFullYear()`**
  > Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

### Setter Methods:
**`Date.prototype.setTime()`**
  > Sets the `Date` object to the time represented by a numberof milliseconds since 1 January, 1970, 00:00:00, UTC, allowing for negative numbers for times prior.

**`Date.prototype.setMilliseconds()`**
  > Sets the milliseconds for a specified date according to local time.

**`Date.prototype.setSeconds()`**
  > Sets the seconds for a specified date according to local time.

**`Date.prototype.setMinutes()`**
  > Sets the minutes for a specified date according to local time.

**`Date.prototype.setHours()`**
  > Sets the hours for a specified date according to local time.

**`Date.prototype.setDate()`**
  > Sets the day of the month for a specified date according to local time.

**`Date.prototype.setMonth()`**
  > Sets the month for a specified date according to local time.

**`Date.prototype.setFullYear()`**
  > Sets the full year (i.e. 4 digits for 4-digit years) for a specified date according to local time.

**`Date.prototype.setUTCMilliseconds()`**
  > Sets the milliseconds for a specified date according to universal time.

**`Date.prototype.setUTCSeconds()`**
  > Sets the seconds for a specified date according to universal time.

**`Date.prototype.setUTCMinutes()`**
  > Sets the minutes for a specified date according to universal time.

**`Date.prototype.setUTCHours()`**
  > Sets the hours for a specified date according to universal time.

**`Date.prototype.setUTCDate()`**
  > Sets the day of the month for a specified date according to univeral time.

**`Date.prototype.setUTCMonth()`**
  > Sets the month for a specified date according to universal time.

**`Date.prototype.setUTCFullYear()`**
  > Sets the full year (i.e. 4 digits for 4-digit years) for a specified date according to universal time.

### Conversion Getter Methods:
**`Date.prototype.toString()`**
  > Returns a string representing the specified `Date` object.  Overrides the `Object.prototype.toString()` method.

**`Date.prototype.toISOString()`**
  > Converts a date to a string following the **ISO 8601 Extended Format**.

**`Date.prototype.toDateString()`**
  > Returns the 'date' portion of the `Date` as a human-readable string like 'Thu Apr 12 2018'.

**`Date.prototype.toTimeString()`**
  > Returns the 'time' portion of the `Date` as a human-readable string.

**`Date.prototype.toLocaleString()`**
  > Returns a string with a locality sensitive representation of this date.  Overrides the `Object.prototype.toLocaleString()` method.

**`Date.prototype.toLocaleDateString()`**
  > Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

**`Date.prototype.toLocaleTimeString()`**
  > Returns a strig wih a locality sensitive representation o fthe time portion of this date based on system settings.

**`Date.prototype.toUTCString()`**
  > Converts a date to a string using the UTC timezone.

**`Date.prototype.valueOf()`**
  > Returns the primitive value of a `Date` object.  Overrides the `Object.prototype.valueOf()` method.

**`Date.prototype.toJSON()`**
  > Returns a string representing the `Date` using `toISOString()`.  Intended for use by `JSON.stringify()`.


## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.1 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `prototype` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1***</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4***</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *Prior to version 41, this has not been an ordinary object as specified in ES2015.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/prototype)