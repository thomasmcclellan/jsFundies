##### 11/07/2019
# `Intl.Collator.prototype.compare()`

```js
function firstAlphabetical(locale, letter1, letter2) {
  if (new Intl.Collator(locale).compare(letter1, letter2) > 0)
    return letter1

  return letter2
}

console.log(firstAlphabetical('de', 'z', 'ä')) // z
console.log(firstAlphabetical('sv', 'z', 'ä')) // ä
```

---

## Syntax:
`collator.compare(string1, string2)`

* **string1, string2**: `strings` to compare against each other.

---

## Description:
The `Intl.Collator.prototype.compare()` method compares two `strings` according to the sort order of this `Collator` `object`.

The `compare` getter `function` returns a `number` indicating how `string1` and `string2` compare to each other according to the sort order of this `Collator` `object`: a negative value if `string1` comes before `string2`; a positive value if `string1` comes after `string2`; 0 if they are considered equal.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Internationalization API 1.0 (`ECMA-402`) | 2012 | Standard | Initial definition |
| ECMAScript Internationalization API 2.0 (`ECMA-402`) | 2015 | Standard |  |
| ECMAScript Internationalization API 4.0 (`ECMA-402`) | 2019 | Draft |  |

---

## Browser Compatibility:
| `compare()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/compare)