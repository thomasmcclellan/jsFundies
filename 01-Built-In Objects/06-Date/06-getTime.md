##### 7/23/2019
# `Date.prototype.getTime()`

```js
const moonLanding = new Date('July 20, 1969 00:20:18 GMT+00:00')

// milliseconds since 1 January, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime()) // -14254782000
```

---

## Syntax:
`dateObj.getTime()`

## Return value:
A `number` representing the milliseconds elapsed since 1 January, 1970, 00:00:00 UTC and the given date.

---

## Description:
The `getTime()` method returns the number of milliseconds* since the [Unix Epoch](https://en.wikipedia.org/wiki/Unix_time).

  > *JS uses milliseconds as the unit of measurement, whereas `Unix Time` is in seconds.

  > `getTime()` always uses UTC for the time representation.  For example, a client browser is one timezone, `getTime()` will be the same as the client browser in any other timezone. 

  > You can use this method to help assign a date and time to another `Date` object.  This method is functionally equivalent to the `valueOf()` method.

---

## Using `getTime()` For Copying Dates:
Cosntructing a date object with the identical time value:

```js
// Since month is 0-based, birthday wil be January 10, 1995
const birthday = new Date(1994, 12, 10)
const copy = new Date()

copy.setTime(birthday.getTime()) 

console.log(copy) // 1995-01-10T05:00:00.000Z
```

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

<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)