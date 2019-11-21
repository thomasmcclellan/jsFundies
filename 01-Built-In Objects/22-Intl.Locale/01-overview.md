##### 11/21/2019
# `Intl.Locale` Overview

```js
const korean = new Intl.Locale('ko', {
  script: 'Kore',
  region: 'KR',
  hourCycle: 'h24',
  calendar: 'gregory'
})
const japanese = new Intl.Locale('ja-Jpan-JP-u-ca-japanese-hc-h12')

console.log(korean.baseName, japanese.baseName) // ko-Kore-KR ja-Jpan-JP
console.log(korean.hourCycle, japanese.hourCycle) // h24 h12
```

---

## Syntax:
`new Intl.Locale([tag, [, options]])`

* **tag**: `Unicode` locale identifier `string`
* **options**: `object` that contains configuration for the `Locale`.  Keys are `Unicode` locale tags, values are valid `Unicode` tag values

---

## Description:
The `Intl.Locale` constructor is a standard built-in property of the `Intl` `object` that represents a `Unicode` locale identifier.

The `Intl.Locale` `object` was created to allow for easier manipulation of `Unicode` locales. `Unicode` represents locales with a `string`, called a locale identifier. The locale identifier consists of a language identifier and extension tags. Language identifiers are the core of the locale, consisting of language, script, and region subtags. Additional information about the locale is stored in the optional extension tags. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the `Intl` API used `strings` to represent locales, just as `Unicode` does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags.

The `Intl.Locale` `object` has the following property:

`Intl.Locale.prototype`
  > The prototype `object` for the `Locale` constructor.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `Locale` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**74**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: red">**X**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: red">**X**</span> | **Opera** || 
| <span style="color: red">**X**</span> | **Safari** || 
| <span style="color: lightgreen">**74**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**74**</span> | **Chrome for Android** || 
| <span style="color: red">**X**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: red">**X**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Locale)