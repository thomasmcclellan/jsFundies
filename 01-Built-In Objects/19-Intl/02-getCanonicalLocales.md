##### 11/04/2019
# `Intl.getCanonicalLocales()`

```js
console.log(Intl.getCanonicalLocales('EN-US')) // ['en-US']
console.log(Intl.getCanonicalLocales(['EN-US', 'Fr'])) // ['en-US', 'fr']

try {
  Intl.getCanonicalLocales('EN_US')
} catch (err) {
  console.log(err)
  // RangeError: invalid language tag: EN_US
}
```

---

## Syntax:
`Intl.getCanonicalLocales(locales)`

* **locales**: list of `string` values for which to get the canonical locale names 

## Return value:
An `array` containing the canonical locale names.

---

## Description:
The `Intl.getCanonicalLocales()` method returns an `array` containing the canonical locale names.  Duplicates will be omitted and elements will be validated as structurally valid language tags.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `getCanonicalLocales()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**54**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**16**</span> | **Edge** || 
| <span style="color: lightgreen">**48**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: red">**X**</span> | **Opera** || 
| <span style="color: lightgreen">**11**</span> | **Safari** || 
| <span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: red">**X**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**56**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**11**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: red">**X**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales)