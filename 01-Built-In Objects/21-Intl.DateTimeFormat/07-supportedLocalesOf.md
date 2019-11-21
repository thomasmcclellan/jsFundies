##### 11/20/2019
# `Intl.DateTimeFormat.supportedLocalesOf()`

```js
const locales1 = ['ban', 'id-u-co-pinyin', 'de-ID']
const options1 = { localeMatcher: 'lookup' }

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales1, options1)) // ['id-u-co-pinyin', 'de-ID']
```

---

## Syntax:
`Intl.DateTimeFormat.supportedLocalesOf(locales [, options])`

* **locales**: `string` with a `BCP 47` language tag, or an `array` of such `strings`.  For the general form of the `locales` argument, see the [Intl page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation) 
* **options** (Optional): `object` that may have the following property: 
  * **localeMatcher**: locale matching algorithm to use.  Possible values are `'lookup'` and `'best fit'`; the default is `'best fit'` 

## Return value:
An `array` of `strings` representing a subset of the given locale tags that are supported in date and time formatting without having to fall back to the runtime's default locale.

---

## Description:
The `Intl.DateTimeFormat.supportedLocalesOf()` method returns an `array` containing those of the provided locales that are supported in date and time formatting without having to fall back to the runtime's default locale.

Returns an `array` with a subset of the language tags provided in `locales`.  The language tags returned are those for which the runtime supports a locale in date and time formatting that the locale matching algorithm used considers a match, so that it wouldn't have to fall back to the default locale.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `supportedLocalesOf` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/supportedLocalesOf)