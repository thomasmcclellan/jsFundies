##### 8/11/2020
# `Reflect.getPrototypeOf()`

```js
const object1 = {
  property1: 42
};

const proto1 = Reflect.getPrototypeOf(object1);

console.log(proto1); // [object Object]
console.log(Reflect.getPrototypeOf(proto1)); // null
```

---

## Syntax:
`Reflect.getPrototypeOf(target)`

* **target**: The target `function` to call.

## Return value:
The prototype of the given `object`. If there are no inherited properties, `null` is returned.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not an `object`. 

---

## Description:
The static `Reflect.getPrototypeOf()` method is almost the same method as `Object.getPrototypeOf()`. It returns the prototype (i.e. the value of the internal `[[Prototype]]` property) of the specified `object`.

The `Reflect.getPrototypeOf()` method returns the prototype (i.e. the value of the internal `[[Prototype]]` property) of the specified `object`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `getPrototypeOf()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf)