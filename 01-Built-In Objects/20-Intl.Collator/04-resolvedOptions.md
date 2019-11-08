##### 11/08/2019
# `Intl.Collator.prototype.resolvedOptions()`

```js
const numberDe = new Intl.NumberFormat('de-DE')
const numberAr = new Intl.NumberFormat('ar')

console.log(numberDe.resolvedOptions().numberingSystem) // latn
console.log(numberAr.resolvedOptions().numberingSystem) // arab
```

---

## Syntax:
`collator.resolvedOptions()`

## Return value:
A new `object` with properties reflecting the locale and collation options computed during the initialization of the given `Collator` `object`.

---

## Description:
The `Intl.Collator.prototype.resolvedOptions()` method returns a new `object` with properties reflecting the locale and collation options during initialization of this `Collator` `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `resolvedOptions()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**24**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**Yes**</span> | **Edge** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/resolvedOptions)