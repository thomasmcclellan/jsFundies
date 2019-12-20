##### 12/16/2019
# `Intl.RelativeTimeFormat.prototype.format()`

```js
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' })

console.log(rtf1.format(3, 'quarter')) // in 3 qtrs
console.log(rtf1.format(-1, 'day')) // 1 day ago
console.log(rtf1.format(10, 'seconds')) // in 10 sec
```

---

## Syntax:
`relativeTimeFormat.format(value, unit)`

* **value**: numeric value to use in the internationalized relative time message
* **unit**: unit to use in the relative time internationalized message.  Possible values are:  `'year'`, `'quarter'`, `'month'`, `'week'`, `'day'`, `'minute'`, and `'second'`.  Plural forms are also permitted 

---

## Description:
The `Intl.RelativeTimeFormat.prototype.format()` method formats a `value` and `unit` according to the locale and formatting options of this `RelativeTimeFormat` `object`.

The `function` returned by the `format` getter formats a value and a unit into a `string` according to the locale and formatting options of this `Intl.RelativeTimeFormat` `object`. 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `format()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**71**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**65**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**58**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**71**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**71**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**65**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**50**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**10.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/format)