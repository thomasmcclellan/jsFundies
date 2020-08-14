##### 8/10/2020
# `Reflect.getOwnPropertyDescriptor()`

```js
const object1 = {
  property1: 42
};

console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').value); // 42
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property2')); // undefined
console.log(Reflect.getOwnPropertyDescriptor(object1, 'property1').writable); // true
```

---

## Syntax:
`Reflect.getOwnPropertyDescriptor(target, propertyKey)`

* **target**: The target `function` to call.
* **propertyKey**: The name of the property to be defined or modified.

## Return value:
A property descriptor `object` if the property exists in `target` `object`; otherwise, `undefined`.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.getOwnPropertyDescriptor()` method is similar to `Object.getOwnPropertyDescriptor()`. It returns a property descriptor of the given property if it exists on the `object`, `undefined` otherwise.

The `Reflect.getOwnPropertyDescriptor()` method returns a property descriptor of the given property if it exists in the `target` object, `undefined` otherwise. The only difference to `Object.getOwnPropertyDescriptor()` is how non-`object` targets are handled.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `getOwnPropertyDescriptor()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)