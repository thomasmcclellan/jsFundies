##### 11/27/2019
# `Intl.NumberFormat.prototype`
## Description:
The `Intl.NumberFormat.prototype` property represents the prototype `object` for the `Intl.NumberFormat` constructor.

| Property attributes of `Intl.NumberFormat.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

  > `Intl.NumberFormat` instances inherit from `Intl.NumberFormat.prototype`.  Modifications to the prototype `object` are inherited by all `Intl.NumberFormat` instances.

---

## Properties:
**`Intl.NumberFormat.prototype.constructor`**
  > A reference to `Intl.NumberFormat`.

## Methods: 
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
| `prototype` | Browser | Platform |
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
| <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/prototype)