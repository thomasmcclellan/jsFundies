##### 5/27/2020
# `Object.isExtensible()`

```js
const obj1 = {};

console.log(Object.isExtensible(obj1)); // true

Object.preventExtensions(obj1);

console.log(Object.isExtensible(obj1)); // false
```

---

## Syntax:
`Object.isExtensible(obj)`

* **obj**: The `object` which should be checked

## Return value:
A `boolean` indicating whether or not the given `object` is extensible.

---

## Description:
The `Object.isExtensible()` method determines if an `object` is extensible (whether it can have new properties added to it).

`Objects` are extensible by default: they can have new properties added to them, and (in engines that support `__proto__`), their `__proto__` property can be modified.  An `object` can be marked as non-extensible using `Object.preventExtensions()`, `Object.seal()`, or `Object.freeze()`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `isExtensible()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**6**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**12**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**6**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)