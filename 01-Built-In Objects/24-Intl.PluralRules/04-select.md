##### 12/10/2019
# `Intl.PluralRules.select()`
## Syntax:
`pluralRule.select(number)`

* **number**: `number` to get a plural rule for 

## Return value:
A `string` representing the pluralization category of the `number`.  Can be one of `'zero'`, `'one'`, `'two'`, `'few'`, `'many'`, or `'other'`.

---

## Description:
The `Intl.PluralRules.select()` method returns a `string` indicating which plural rule to use for locale-aware formatting.

This `function` selects a pluralization category according to the locale and formatting options of a `PluralRules` `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `select()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules/select)