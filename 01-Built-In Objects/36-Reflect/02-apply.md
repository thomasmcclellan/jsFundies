##### 8/03/2020
# `Reflect.apply()`

```js
console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 1
console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])); // hello
console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index); // 4
console.log(Reflect.apply(''.charAt, 'ponies', [3])); // i
```

---

## Syntax:
`Reflect.apply(target, thisArgument, argumentsList)`

* **target**: The target `function` to call.
* **thisArgument**: The value of `this` provided for the call to `target`.
* **argumentsList**: An `array`-like `object` specifying the arguments with which `target` should be called.

## Return value:
The result of calling the given `target` `function` with the specified `this` value and arguments.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: if the `target` is not callable. 

---

## Description:
The static `Reflect.apply()` method calls a target `function` with arguments as specified.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `apply()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)