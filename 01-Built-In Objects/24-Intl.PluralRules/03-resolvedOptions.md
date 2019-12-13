##### 12/09/2019
# `Intl.PluralRules.prototype.resolvedOptions()`
## Syntax:
`pluralRule.resolvedOptions()`

## Return value:
A new `object` with properties reflecting the locale and plural formatting options computed during the initialization of the given `PluralRules` `object`.

---

## Description:
The `Intl.PluralRules.prototype.resolvedOptions()` method returns a new `object` with properties reflecting the locale and plural formatting options computed during initialization of this `PluralRules` `object`.

**The resulting `object` has the following properties:**

| Property | Description |
|---|---|
| `locale` | The `BCP 47` language tag for the locale actually used. If any `Unicode` extension values were requested in the input `BCP 47` language tag that led to this locale, the key-value pairs that were requested and are supported for this locale are included in `locale` |
| `pluralCategories` | An `array` of plural categories used by the given locale, selected from the list `'zero'`, `'one'`, `'two'`, `'few'`, `'many'`, and `'other'` |
| `type` | The type used (`cardinal` or `ordinal`) |

**One of the following two groups of properties is included:**

| Property | Description |
|---|---|
| `minimumIntegerDigits`<br>`minimumFractionDigits`<br>`maximumFractionDigits` | The values provided for these properties in the `options` argument or filled in as defaults.  These properties are present only if neither `minimumSignificantDigits` nor `maximumSignificantDigits` was provided in the `options` argument |
| `minimumSignificantDigits`<br>`maximumSignificantDigits` | The values provided for these properties in the `options` argument or filled in as defaults.  These properties are present only if at least one of them was provided in the `options` argument |


---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `resolvedOptions()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/resolvedOptions)