##### 6/15/2020
# `Object.values()`

```js
const object1 = {
  a: 'something',
  b: 42,
  c: false
};

console.log(Object.values(object1)); // ['something', 42, false]
```

---

## Syntax:
`Object.values(obj)`

* **obj**: The `object` whose enumerable own property values are to be returned.

## Return value:
An `array` containing the given `object`'s own enumerable property values.

---

## Description:
The `Object.values()` method returns an `array` of a given `object`'s own enumerable property values, in the same order as that provider by a `for...in` loop.  (The only difference is that a `for...in` loop enumerates properties in the prototype chain as well).

`Object.values()` returns an `array` whose elements are the enumerable property values found on the `object`. The ordering of the properties is the same as that given by looping over the property values of the `object` manually.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `values()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**54**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**47**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**41**</span> | **Opera** || 
| <span style="color: lightgreen">**10.1**</span> | **Safari** || 
| <span style="color: lightgreen">**54**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**54**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**47**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**41**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10.3**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**6.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**7.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)