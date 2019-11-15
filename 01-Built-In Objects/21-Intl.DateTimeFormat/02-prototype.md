##### 11/13/2019
# `Intl.DateTimeFormat.prototype`
## Description:
The `Intl.DateTimeFormat.prototype` property represents the prototype `object` for the `Intl.DateTimeFormat` constructor.

| Property attributes of `Intl.DateTimeFormat.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`Intl.DateTimeFormat` instances inherit from `Intl.DateTimeFormat.prototype`.  Modifications to the prototype `object` are inherited by all `Intl.DateTimeFormat` instances.

---

## Properties:
**`Intl.DateTimeFormat.prototype.constructor`**
  > A reference to `Intl.DateTimeFormat`.

## Methods: 
**`Intl.DateTimeFormat.prototype.format()`**
  > Getter `function` that formats a date according to the locale and formatting options of this `DateTimeFormat` `object`.

**`Intl.DateTimeFormat.prototype.formatToParts()`**
  > Returns an `array` of `objects` representing the date `string` in parts that can be used for custom locale-aware formatting.

**`Intl.DateTimeFormat.prototype.resolvedOptions()`**
  > Returns a new `object` with properties reflecting the locale and formatting options computed during initialization of the `object`.

**`Intl.DateTimeFormat.prototype.formatRange()`**
  > This method receives two `Dates` and formats the date range in the most concise way based on the locale and options provided when instantiating `DateTimeFormat`.

**`Intl.DateTimeFormat.prototype.formatRangeToParts()`**
  > This method receives two `Dates` and returns an `array` of `objects` containing the locale-specific tokens representing each part of the formatted date range.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/prototype)