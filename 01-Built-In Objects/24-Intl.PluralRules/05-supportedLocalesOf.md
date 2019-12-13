##### 12/11/2019
# `Intl.PluralRules.supportedLocalesOf()`
## Syntax:
`Intl.PluralRules.supportedLocalesOf(locales [, options])`

* **locales**: `string` with a `BCP 47` language tag, or an `array` of such `strings`
* **options** (Optional): `object` that may have the following property:
  * **localeMatcher**: locale matching algorithm to use.  Possible values are `'lookup'` and `'best fit'`; the default being the latter

## Return value:
An `array` of `strings` representing a subset of the given locale tags that are supported in plural formatting without having the fall back to the runtime's default locale.

---

## Description:
The `Intl.PluralRules.supportedLocalesOf()` method returns an `array` containing those of the provided locales that are supported in plural formatting without having to fall back to the runtime's default locale.


Returns an `array` with a subset of the language tag provided in `locales`.  The language tags returns are those for which the runtime supports a locale in plural formatting that the locale matching algorithm used considers a match, so that it wouldn't have to fall back to the default locale. 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `supportedLocaleOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**63**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**18**</span> | **Edge** || 
| <span style="color: lightgreen">**58**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**50**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**63**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**63**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**58**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**46**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**8.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**10.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/supportedLocalesOf)