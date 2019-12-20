##### 12/19/2019
# `Intl.RelativeTimeFormat.supportedLocalesOf()`

```js
const locales1 = ['ban', 'id-u-co-pinyin', 'de-ID']
const options1 = { localeMatcher: 'lookup' }

console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales1, options1)) // ['id-u-co-pinyin', 'de-ID']
```

---

## Syntax:
`relativeTimeFormat.supportedLocalesOf(locales [, options])`

* **locales**: `string` with a `BCP 47` language tag, or an `array` of such `strings` 
* **options** (Optional): `object` that may have the following property:
  * **localeMatcher**: locale matching algorithm to use.  Possible values are `'lookup'` and `'best fit'`; default being the latter

## Return value:
An `array` of `strings` representing a subset of the given locale tags that are supported  in date and time formatting without having to fall back to the runtime's default locale.

---

## Description:
The `Intl.RelativeTimeFormat.supportedLocalesOf()` method returns an `array` containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale.

Returns an `array` with a subset of the language tags provided in `locales`. The language tags returned are those for which the runtime supports a locale in date and time formatting that the locale matching algorithm used considers a match, so that it wouldn't have to fall back to the default locale.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `supportedLocalesOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**71**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**65**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**58**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**71**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**71**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**65**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**50**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**10.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat/supportedLocalesOf)