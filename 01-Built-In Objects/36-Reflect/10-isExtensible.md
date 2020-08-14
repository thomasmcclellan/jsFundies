##### 8/13/2020
# `Reflect.isExtensible()`

```js
const object1 = {},
      object2 = Object.seal({});

console.log(Reflect.isExtensible(object1)); // true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1)); // false
console.log(Reflect.isExtensible(object2)); // false
```

---

## Syntax:
`Reflect.isExtensible(target)`

* **target**: The target `function` to call.

## Return value:
A `boolean` indicating whether or not the target is extensible.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.isExtensible()` method determines if an `object` is extensible (whether it can have new properties added to it). It is similar to `Object.isExtensible()`, but with some differences.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `isExtensible()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**49**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**42**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**42**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)