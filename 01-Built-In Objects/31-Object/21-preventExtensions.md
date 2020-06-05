##### 6/02/2020
# `Object.preventExtensions()`

```js
const obj1 = {};

Object.preventExtensions(obj1);

try {
  Object.defineProperty(obj1, 'property1', { value: 42 });
} catch(e) {
  console.log(e);
  // Expected output: TypeError: Cannot define property property1, object is not extensible
}
```

---

## Syntax:
`Object.preventExtensions(obj)`

* **obj**: The `object` which should be made non-extensible.

## Return value:
The `object` being made non-extensible.

---

## Description:
The `Object.preventExtensions()` method prevents new properties from ever being added to an `object` (i.e. prevents future extensions to the `object`).

An `object` is extensible if new properties can be added to it. `Object.preventExtensions()` marks an `object` as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. Note that the properties of a non-extensible `object`, in general, may still be deleted. Attempting to add new properties to a non-extensible `object` will fail, either silently or by throwing a `TypeError` (most commonly, but not exclusively, when in strict mode).

`Object.preventExtensions()` only prevents addition of own properties. Properties can still be added to the `object` prototype.

This method makes the `[[prototype]]` of the target immutable; any `[[prototype]]` re-assignment will throw a `TypeError`. This behavior is specific to the internal `[[prototype]]` property, other properties of the target `object` will remain mutable.

There is no way to make an `object` extensible again once it has been made non-extensible.

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
| `preventExtensions()` | `ES2015` Behavior for Non-`Object` Argument | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**6**</span> | <span style="color: lightgreen">**44**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**35**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | <span style="color: lightgreen">**11**</span> | **IE** || 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**31**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**44**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | <span style="color: lightgreen">**44**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**35**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**32**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**6**</span> | <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | <span style="color: lightgreen">**4.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)