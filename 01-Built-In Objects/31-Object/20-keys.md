##### 6/01/2020
# `Object.keys()`

```js
const obj1 = {
  a: 'something',
  b: 42,
  c: false
};

console.log(Object.keys(obj1)); // ['a', 'b', 'c']
```

---

## Syntax:
`Object.keys(obj)`

* **obj**: The `object` of which the enumerable's own properties are to be returned.

## Return value:
An `array` of `strings` that represent all the enumerable properties of the given `object`.

---

## Description:
The `Object.keys()` method returns an `array` of a given `object`'s own enumerable property **names**, iterated in the same order that a normal loop would.

`Object.keys()` returns an `array` whose elements are `strings` corresponding to the enumerable properties found directly upon `object`.  The ordering of the properties is the same as that given by looping over the properties of the `object` manually.

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
| `keys()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**12**</span> | **Opera** || 
| <span style="color: lightgreen">**5**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**5**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)