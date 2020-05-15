##### 5/13/2020
# `Object.entries()`

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```

---

## Syntax:
`Object.entries(obj)`

* **obj**: The `object` whose own enumerable `string`-keyed property `[key, value]` pairs are to be returned

## Return value:
An `array` of the given `object`'s own enumerable `string`-keyed property `[key, value]` pairs.

---

## Description:
The `Object.entries()` method returns an `array` of a given `object`'s own enumerable `string`-keyed property `[key, value]` pairs, in the same order as that provided by a `for...in` loop (the only important difference is that a `for...in` loop enumerates properties in the prototype chain as well).

The order of the `array` returned by `Object.entries()` does not depend on how an `object` is defined.  If there is a need for certain ordering, then the `array` should be sorted first, like `Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

`Object.entries()` returns an `array` whose elements are `arrays` corresponding to the enumerable `string`-keyed property `[key, value]` pairs found directly upon `object`. The ordering of the properties is the same as that given by looping over the property values of the `object` manually.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `entries()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)