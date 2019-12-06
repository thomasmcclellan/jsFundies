##### 12/03/2019
# `Intl.NumberFormat.prototype.formatToParts()`
## Syntax:
``Intl.NumberFormat.prototype.formatToParts(number)`

* **number**: `number` (or BigInt) to format.

## Return value:
An `array` of `objects` containing the formatted number in parts.

---

## Description:
The `Intl.NumberFormat.prototype.formatToParts()` method allows locale-aware formatting of `strings` produced by `NumberTimeFormat` formatters.

The `formatToParts()` method is useful for custom formatting of number `strings`. It returns an `array` of `objects` containing the locale-specific tokens from which it possible to build custom `strings` while preserving the locale-specific parts. The structure the `formatToParts()` method returns, looks like this:

```js
[
  { type: 'integer', value: '3' }
  { type: 'group', value: '.' }
  { type: 'integer', value: '500' }
]
```

Possible types are the following:

| Type | Description |
|---|---|
| `currency` | The currency `string`, such as the symbols `$` and `€` or the name `Dollar`, `Euro` depending on how `currencyDisplay` is specified |
| `decimal` | The decimal separator `string` (`.`) |
| `fraction` | The fraction `number` |
| `group` | The group separator `string` (`,`)  |
| `infinity` | The `Infinity` `string` (`∞`) |
| `integer` |  The integer `number` |
| `literal` | Any literal `string` or whitespace in the formatted `number` |
| `minusSign` | The minus sign `string` (`-`) |
| `nan` | The `NaN` `string` (`NaN`) |
| `plusSign` | The plus sign `string` (`+`) |
| `percentSign` | The percent sign `string` (`%`) |

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `formatToParts()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**64**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**58**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**51**</span> | **Opera** || 
| <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**64**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**64**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**58**</span> | **Firefox for Android** || 
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**9.0**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts)