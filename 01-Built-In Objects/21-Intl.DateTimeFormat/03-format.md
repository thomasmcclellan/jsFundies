##### 11/14/2019
# `Intl.DateTimeFormat.prototype.format()`

```js
const options1 = {
  weekday: 'long',
  year: 'numeric', 
  month: 'long',
  day: 'numeric'
}
const date1 = new Date(2019, 10)
const dateTimeFormat1 = new Intl.DateTimeFormat('sr-RS', options1)
const dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', options1)
const dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options1)

console.log(dateTimeFormat1.format(date1))
console.log(dateTimeFormat1.format(date1))
console.log(dateTimeFormat1.format(date1))
```

---

## Syntax:
`dateTimeFormat.format(date)`

* **date**: date to format.

---

## Description:
The `Intl.DateTimeFormat.prototype.format()` method formats a date according to the locale and formatting options of this `Intl.DateTimeFormat` `object`.

The format getter formats a date into a `string` according to the locale and formatting options of this `Intl.DateTimeFormat` `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `format()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format)