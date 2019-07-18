##### 7/17/2019
# Date Overview

```js
// Sun Dec 17, 1995 03:24:00 GMT
const date1 = new Date('December 17, 1995 03:24:00')

// Sun Dec 17, 1995 03:24:00 GMT
const date2 = new Date('1995-12-17T03:24:00')

console.log(date1 === date2) // false
console.log(date1 - date2) // 0
```

---

## Instantiating `Date` Objects
The only way to create a new JS `Date` object is to use the `new` operator:

```js
const now = new Date()
```

If you simply call the `Date()` object directly, the returned value is a string instead of a `Date` object.  There's no `Date` literal syntax in JS.

---

## Syntax:
`new Date()`  
`new Date(value)`  
`new Date(dateString)`  
`new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])`

### Parameters:
| Option | Paramter(s) | Description
|---|---|---|
| No Parameters || When no paramters are provided, the newly-created `Date` object represents the current dateand time, specifically in the local time zone, as of the time of installation.
| Unix Timestamp | `dateString` | A string value representing a date, specifically in a format recognized by the `Date.parse()` method (these formats are [IETF-Compliant RFC 2822 timestamps](https://tools.ietf.org/html/rfc2822#page-14) and also strings in a [version of ISO8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)) |
| Individual Date and Time Component Values | year | Integer value representing the year.  Values from 0 to 99 map to the years 1900 to 1999; all other values are the actual year. |
|| `monthIndex` | Integer value representing the month, beginning with 0 for January to 11 for December. |
|| day (Optional) | Integer value representing the day of the month.  If not specified, the default value of 1 is used. |
|| hours (Optional) | Integer value representing the hour of the day.  The default is 0 (midnight). |
|| minutes (Optional) | Integer value representing the minute segment of a time.  The default is 0 minutes past the hour. |
|| seconds (Opional) | Integer value representing the seconds segment of a time.  The default is 0 seconds past the minute. |
|| milliseconds (Optional) | Integer value representing the millisecond segment of a time.  The default is 0 milliseconds past the second. |

---

## User Notes:
### The Unix Epoch and Timestamp:
A JS date is fundamentally specified as the number of milliseconds that hav elapsed since midnight on January, 1970, UTC.  This date and time is caled the **Unix epoch**, which is the predominant base value for computer-recorded date and time values.

  > **NOTE**: It is important to keep in mind that the date and time is stored in the local time zone, and that the basic methods to fetch the date and time or its components all work in the local time zone as well.

A day is made up of 86,400,000 milliseconds.  Given that and the size of the underlying number used to record the timestamp, and it can be calculated that the `Date` object can represent dates within ±100,000,000 days relative to January 1, 1970, UTC.

### Date Format and Time Zone Conversions:
There are a number of methods available to obtain the date in various formats, as well as to do time zone conversions.  Especially useful are the functions that output the date and time in **Coordinated Universal Time** (UTC), the global standard time defined by the World Time Standard.  This time is historically known as **Greenwich Mean Time**, as UTC lies along the meridian that includes London and nearby Greenwich in the UK.  The user's device provides the local time.  

In addition to methods to read and alter individual components of the local date and time, such as `getDay()` and `setHours()`, there are also versions of the same methods that read and manipulate the date and time using UTC, such as `getUTCDay()` and `setUTCHours()`.

---

## Description:
Creates a JS `Date` instance that represents a single moment in time in a platform-independent format.  `Date` objects contain a `Number` that represents milliseconds since `1 January 1970 UTC`.

---

## Properties:
**`Date.prototype`**
  > Allows the addition of properties to a JS `Date` object.

**`Date.length`**
  > The value of `Date.length` is 7.  This is the number of arguments handled by the constructor.  It is not generally a useful result.

## Methods: 
**`Date.now()`**
  > Returns the numeric value corresponding to the current time--the number of milliseconds elapsed since January 1, 1970 00:00:00, UTC, with leap seconds ignored.
  
**`Date.parse()`**
  > Parses a stirng representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC, with leap seconds ignored.  

  > **NOTE**: Parsing of strings with `Date.parse` is stongly discourages due to browser differences and inconsistancies.
  
**`Date.UTC()`**
  > Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since 1 January, 1970, 00:0:00, UTC, with leap seconds ignored.

## JS `Date` instances:
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

---

## Several ways to create a `Date` object:
```js
const today = new Date()
const birthday = new Date('October 28, 1987 05:58:00')
const anniversay = new Date('2016-07-2T01:00:00')
const taraBirthday = new Date(1992, 06, 27)
const margotBirthday = new Date(2018, 04, 10, 17, 11, 0)
```

## Two digit year map to 1900 - 1999:
In order to create and get dates between the years 0 and 99 the `Date.prototype.setFullYear()` and `Date.prototype.getFullYear()` methods should be used.

```js
const date = new Date(98, 1) // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

// Deprecated method vvv
console.log(date.setYear(98)) // 886309200000 = Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)

console.log(date.setFullYear(98)) // -59071835038000 = Sat Feb 01 0098 00:00:00 GMT+0000 (BST)
```

## Calculating elapsed time:
Due to the differing lengths of days (due to daylight saving changeover), months and years, expressing elapsed time in units greater than hours, minutes and seconds requires addressing a number of issues and should be thoroughly researched before being attempted.

```js
const yourFunctionReturn = printElapsedTime(yourFunction)

function printElapsedTime(fTest) {
  const nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now()
  
  console.log(`Elapsed time: ${ String(nEndTime - nStartTime) } milliseconds.`)
  
  return vReturn
}
```

  > **NOTE**: In browsers that support [Web Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance)'s high-resolution time feature, `Performance.now()` can provide more reliable and precise measurements of elapsed time than `Date.now()`.

## Get the number of seconds since Unix Epoch:
```js
const seconds = Math.floor(Date.now() / 1000)

console.log(seconds) // 1563395708
```

In this case it's important to return only an integer (so a simple division won't do), and also to only return elapsed seconds (that is why this code uses `Math.floor()`, not `Math.round()`).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.1 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)