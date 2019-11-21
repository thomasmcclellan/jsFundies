##### 11/18/2019
# `Intl.DateTimeFormat.prototype.formatToParts()`
## Syntax:
`dateTimeFormat.formatToParts(date)`

* **date** (Optional): The date to format 

## Return value:
An `array` of `objects` containing the formatted date in parts.

---

## Description:
The `Intl.DateTimeFormat.prototype.formatToParts()`

The `formatToParts()` method is useful for custom formatting of date `strings`.  It returns an `array` of `objects` containing the locale-specific tokens from which it is possible to build custom `strings` while preserving the locale-specific parts.  The structure the `formatToParts()` method returns, looks like the following:

```js
[
  { type: 'day', value: '17' },
  { type: 'weekday', value: 'Monday' }
]
```

Possible types are the following:

| Type | Description |
|---|---|
| `day` | The `string` used for the day, i.e. `'17'` |
| `dayPeriod` | The `string` used for the day period, i.e. `'AM'` or `'PM'` |
| `era` | The `string` used for the era, i.e. `'BC'`, or `'AD'` |
| `hour` | The `string` used for the hour, i.e. `'3'`, or `'03'` |
| `literal` | The `string` used for separating date and time values, i.e. `'/'`, `','`, `'o\'clock'`, `'de'`, etc. |
| `minute` | The `string` used for the minute, i.e. `'00'` |
| `month` | The `string` used for the month, i.e. `'12'` |
| `second` | The `string` used for the second, i.e. `'07'` or `'42'` |
| `timeZoneName` | The `string` used for the name of the time zone, i.e. `'UTC'` |
| `weekday` | The `string` used for the weekday, i.e. `'M'`, `'Monday'`, or `'Montag'` |
| `year` | The `string` used for the year, i.e. `'2012'`, or `'96'` |

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `formatToParts()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**57** *</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**18**</span> | **Edge** || 
| <span style="color: lightgreen">**51**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**11**</span> | **Safari** || 
| <span style="color: lightgreen">**57** *</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**57** *</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**11**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**7.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *Before version 71, `formatToParts()` returned an `object` with an incorrectly cased type key of `dayperiod`.  Version 71 and later use the specification defined `dayPeriod`.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts)