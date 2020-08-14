##### 8/07/2020
# `Reflect.get()`

```js
const object1 = {
  x: 1,
  y: 2
};

console.log(Reflect.get(object1, 'x')); // 1

const array1 = ['zero', 'one'];

console.log(Reflect.get(array1, 1)); // one
```

---

## Syntax:
`Reflect.get(target, propertyKey [, receiver])`

* **target**: The target `function` to call.
* **propertyKey**: The name of the property to be defined or modified.
* **receiver** (**Optional**): The value of `this` provided for the call to `target` if a getter is encountered. When used with `Proxy`, it can be an `object` that inherits from `target`.

## Return value:
The value of the property.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.get()` method works like getting a property from an `object` (`target[propertyKey]`) as a `function`.

The `Reflect.get()` method allows you to get a property on an `object`. It is like the property accessor syntax as a `function`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `get()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)