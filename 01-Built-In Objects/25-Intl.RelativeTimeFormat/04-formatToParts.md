##### 12/17/2019
# `Intl.RelativeTimeFormat.prototype.formatToParts()`

```js
const rtf1 = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
const parts = rtf1.formatToParts(10, 'seconds')

console.log(parts[0].value) // 'in '
console.log(parts[1].value) //  '10'
console.log(parts[2].value) // ' seconds'
```

---

## Syntax:
`RelativeTimeFormat.formatToParts(value, unit)`

* **value**: numeric value to use in the internationalized relative time message
* **unit**: unit to use in the relative time internationalized message.  Possible values are: `'year'`, `'quarter'`, `'month'`, `'week'`, `'day'`, `'hour'`, `'minute'`, and `'second'`.  Plural forms are also permitted

## Return value:
An `array` of `objects` containing the formatted relative time in parts.

---

## Description:
The `Intl.RelativeTimeFormat.prototype.formatToParts()` method returns an `array` of `objects` representing the relative time format in parts that can be used for custom locale-aware formatting.

The `Intl.RelativeTimeFormat.prototype.formatToParts()` method is a version of the format method which it returns an `array` of `objects` which represent "parts" of the `object`, separating the formatted `number` into its constituent parts and separating it from other surrounding text. These `objects` have two properties: type a `NumberFormat` `formatToParts` type, and value, which is the `string` which is the component of the output. If a "part" came from `NumberFormat`, it will have a unit property which indicates the unit being formatted; literals which are part of the larger frame will not have this property.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `formatToParts()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**71**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**70**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**58**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**71**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**71**</span> | **Chrome for Android** || 
| <span style="color: red">**X**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**50**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**10.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/formatToParts)