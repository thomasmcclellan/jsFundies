##### 12/18/2019
# `Intl.RelativeTimeFormat.prototype.resolvedOptions()`

```js
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' })
const options1 = rtf1.resolvedOptions()
const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' })
const options2 = rtf2.resolvedOptions()

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`) // en, narrow, always
console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`) // es, long, auto
```

---

## Syntax:
`relativeTimeFormat.resolvedOptions()`

## Return value:
A new `object` with properties reflecting the locale and number formatting options computed during the initialization of the given `RelativeTimeFormat` `object`.

---

## Description:
The `Intl.RelativeTimeFormat.prototype.resolvedOptions()` method returns a new `object` with properties reflecting the locale and relative time formatting options computed during initialization of this `RelativeTimeFormat` `object`.

For further information on the `object` returned, go [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/resolvedOptions).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `resolvedOptions()` | `numberingSystem` |  Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**71**</span> | <span style="color: lightgreen">**73**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**65**</span> | <span style="color: lightgreen">**70**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**58**</span> | <span style="color: lightgreen">**60**</span> | **Opera** || 
| <span style="color: red">**X**</span> | <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**71**</span> | <span style="color: lightgreen">**73**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**71**</span> | <span style="color: lightgreen">**73**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**65**</span> | <span style="color: red">**X**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**50**</span> | <span style="color: lightgreen">**52**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**10.0**</span> | <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> | <span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/resolvedOptions)