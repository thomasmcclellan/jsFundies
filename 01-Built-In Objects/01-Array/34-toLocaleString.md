##### 6/04/2019
# `Array.prototype.toLocaleString()`

```js
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')]
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString) // '1, a, 12/21/1997, 2:12:00 PM'
```

---

## Syntax:
`arr.toLocaleString([locales[, options]])`

* **locales (optional)**: string with a `BCP 47` language tag, or an array of such strings.  For the general form and interpretation of the `locales` argument
* **options (optional)**: object with configuration properties

## Return value:
A string representing the elements of the array

---

## Description:


---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition was in ECMAScript 3 |

---

## Browser Compatibility:
| `toLocaleString()` | _Optional_ `locales` parameter | _Optional_ `options` parameter | Browser | Platform |
|---|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> |<span style="color: lightgreen">**52**</span> |<span style="color: lightgreen">**52**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: red">**X**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)