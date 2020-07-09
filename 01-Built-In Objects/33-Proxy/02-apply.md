##### 7/07/2020
# `handler.apply()`

```js
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`); // Calculate sum: 1,2

    return target(argumentsList[0], argumentsList[1]) * 10;
  }
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2)); // 3
console.log(proxy1(1, 2)); // 30
```

---

## Syntax:
```js
const p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) { }
});
```

  > The following parameters are passed to the `apply()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **thisArg**: The `this` argument for the call.
* **argumentsList**: The list of arguments for the call.

## Return value:
The `apply()` method can return any value.

---

## Description:
The `handler.apply()` method is a trap for a `function` call of proxy.



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
| <span style="color: lightgreen">**18**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**36**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**49**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**49**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**18**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**36**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**5.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**6.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)