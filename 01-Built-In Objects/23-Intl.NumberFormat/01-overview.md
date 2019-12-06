##### 11/26/2019
# `Intl.NumberFormat` Overview

```js
const number = 123456.789

console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number)) // 123.456,79 €
console.log(new Intl.NumberFormat('jp-JP', { style: 'currency', currency: 'JPY' }).format(number)) // ¥123,457
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)) // 1,23,000
```

---

## Syntax:
`new Intl.NumberFormat([locales [, options]])`
`Intl.NumberFormat.call(this [, locales [, options]])`

  > Parameters can be found [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

---

## Description:
The `Intl.NumberFormat` `object` is a constructor for `objects` that enable language sensitive number formatting.

### Properties:
**`Intl.NumberFormat.prototype`**
  > Allows the addition of properties to all objects.

### Methods:
**`Intl.NumberFormat.supportedLocalesOf()`**
  > Returns an `array` containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

---

## Properties:
`NumberFormat` instances inherit the following properties from their prototype:

**`Intl.NumberFormat.prototype.constructor`**
  > A reference to `Intl.NumberFormat`.

## Methods: 
`NumberFormat` instances inherit the following methods from their prototype:

**`Intl.NumberFormat.prototype.format()`**
  > Getter `function` that formats a number according to the locale and formatting options of this `NumberFormat` `object`.

**`Intl.NumberFormat.prototype.formatToParts()`**
  > Returns an `array` of `objects` representing the number `string` in parts that can be used for custom locale-aware formatting.

**`Intl.NumberFormat.prototype.resolvedOptions()`**
  > Returns a new `object` with properties reflecting the locale and collation options computed during initialization of the `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `NumberFormat` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**26**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**14**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)