##### 12/06/2019
# `Intl.PluralRules` Overview
## Syntax:
`new Intl.PluralRules([locales [, options]])`

* **locales** (Optional): `string` with `BCP 47` language tag, or an `array` of such `strings`
* **options** (Optional): `object` with some or all of the following properties:
  * **localeMatcher**: locale matching algorithm to use.  Possible values are `'lookup'` and `'best fit'`; the default being the latter
  * **type**: type to use.  Possible values are:
    * `'cardinal'`: for cardinal numbers (referring to the quantity of things).  This is the default value.
    * `'ordinal'`: for ordinal numbers (referring to the ordering or ranking of things, i.e. `'1st'`, `'2nd'`, `'3rd'` in English)

  > For more information about these parameters, go [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules).

---

## Description:
The `Intl.PluralRules` `object` is a constructor for `objects` that enable plural sensitive formatting and plural language rules.

### Properties:
**`Intl.PluralRules.prototype`**
  > Allows the addition of properties to all `objects`.

### Methods:
**`Intl.PluralRules.supportedLocalesOf()`**
  > Returns an `array` containing those of the provided locales that are supported without having to fall back to the runtime's default locale.


---

## `PluralRules` Instances:
### Properties:
`PluralRules` instances inherit the following properties from their prototype

**`Intl.PluralRules.prototype.constructor`**
  > A reference to `Intl.PluralRules`.

### Methods: 
`PluralRules` instances inherit the following methods from their prototype.

**`Intl.PluralRules.prototype.resolvedOptions()`**
  > Returns a new `object` with properties reflecting the locale and collation options computed during initialization of the `object`.

**`Intl.PluralRules.prototype.select()`**
  > Returns a `string` indicating which plural rule to use for locale-aware formatting.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |


---

## Browser Compatibility:
| `PluralRules` | `PluralRules` Constructor | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**63**</span> |<span style="color: lightgreen">**63**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**18**</span> |<span style="color: lightgreen">**18**</span> | **Edge** || 
| <span style="color: lightgreen">**58**</span> |<span style="color: lightgreen">**58**</span> | **Firefox** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**50**</span> |<span style="color: lightgreen">**50**</span> | **Opera** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**63**</span> |<span style="color: lightgreen">**63**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**63**</span> |<span style="color: lightgreen">**63**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**58**</span> |<span style="color: lightgreen">**58**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**46**</span> |<span style="color: lightgreen">**46**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**8.0**</span> |<span style="color: lightgreen">**8.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**10.0.0**</span> |<span style="color: lightgreen">**10.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules)