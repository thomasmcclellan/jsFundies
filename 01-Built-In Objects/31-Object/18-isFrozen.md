##### 5/28/2020
# `Object.isFrozen()`

```js
const obj1 = {
  prop1: 42
};

console.log(Object.isFrozen(obj1)); // false

Object.freeze(obj1);

console.log(Object.isFrozen(obj1)); // true
```

---

## Syntax:
`Object.isFroze(obj)`

* **obj**: The `object` which should be checked.

## Return value:
A `boolean` indicating whether or not the given `object` is frozen.

---

## Description:
The `Object.isFrozen()` method determines if an `object` is [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

An `object` is frozen if and only if it is not _extensible_, all of it s properties are non-configurable, and all of its data properties (that is, properties which are not accessor properties with getter and setter components) are non-writable.

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
| `isFrozen()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)