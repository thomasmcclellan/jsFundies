##### 12/12/2019
# `Intl.RelativeTimeFormat` Overview

```js
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' })
const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })

console.log(rtf1.format(3, 'quarter')) // in 3 qtrs
console.log(rtf1.format(-1, 'day')) // 1 day ago
console.log(rtf2.format(2, 'day')) // pasado mañana
```

---

## Syntax:
`new Intl.RelativeTimeFormat([locales [, options]])`

* **locales** (Optional): `string` with a `BCP 47` language tag, or an `array` of such `strings`
* **options** (Optional): `object` with some or all of the following properties:
  * **localeMatcher**: locale matching algorithm to use.  Possible values are `'lookup'` and `'best fit'`; the default being the latter.
  * **numeric**: format of output message.  Possible values are `'always'` (i.e. `1 day ago`) and `'auto'` (i.e. `yesterday`--the `auto` value allows to not always have to user numeric values in the output); the default being the former
  * **style**: length of the internationalized message.  Possible values are `'long'` (i.e. `in 1 month`), `'short'` (i.e. `in 1 mo.`), and `'narrow'` (i.e. `in 1 mo.`--the `narrow` style could be similar to the `short` style for some locales); the default being the first

---

## Description:
The `Intl.RelativeTimeFormat` `object` is a constructor for `objects` that enable language-sensitive time formatting.

### Properties:
**`Intl.RelativeTimeFormat.prototype`**
  > Allows the addition of properties to all `objects`.

### Methods:
**`Intl.RelativeTimeFormat.supportedLocalesOf()`**
  > Returns an `array` containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

---

## `RelativeTimeFormat` Instances:
### Properties:
`RelativeTimeFormat` instances inherit the following properties from their prototype.

**`Intl.RelativeTimeFormat.prototype.constructor`**
  > A reference to `Intl.RelativeTimeFormat`.

### Methods: 
`RelativeTimeFormat` instances inherit the following methods from their prototype.

**`Intl.RelativeTimeFormat.prototype.format()`**
  > Formats a `value` and a `unit` according to the locale and formatting options of the given `Intl.RelativeTimeFormat` `object`.

**`Intl.RelativeTimeFormat.prototype.formatToParts()`**
  > Returns an `array` of `objects` representing the relative time format in parts that can be used for custom locale-aware formatting.

**`Intl.RelativeTimeFormat.prototype.resolvedOptions()`**
  > Returns a new `object` with properties reflecting the locale and formatting options computed during initialization of the `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |


---

## Browser Compatibility:
| `RelativeTimeFormat` | `RelativeTimeFormat()` Constructor | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**71**</span> |<span style="color: lightgreen">**71**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**65**</span> |<span style="color: lightgreen">**65**</span> | **Firefox** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**58**</span> |<span style="color: lightgreen">**58**</span> | **Opera** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**71**</span> |<span style="color: lightgreen">**71**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**71**</span> |<span style="color: lightgreen">**71**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**65**</span> |<span style="color: lightgreen">**65**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**50**</span> |<span style="color: lightgreen">**50**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**10.0**</span> |<span style="color: lightgreen">**10.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> |<span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)