##### 7/08/2020
# `handler.construct()`

```js
function monster1(disposition) {
  this.disposition = disposition;
}

const handler1 = {
  construct(target, args) {
    console.log('monster1 constructor called');
    // expected output: "monster1 constructor called"

    return new target(...args);
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(new proxy1('fierce').disposition);
// expected output: "fierce"
```

---

## Syntax:
```js
const p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
});
```

  > The following parameters are passed to the `construct()` method.  `this` is bound to the handler.

* **target**: The target `object`.
* **argumentsList**: The list of arguments for the constructor.
* **newTarget**: The constructor that was originally called, `p` above.

## Return value:
The `construct()` method can return an `object`.

---

## Description:
The `handler.construct()` method is a trap for the `new` operator. In order for the new operation to be valid on the resulting `Proxy` object, the target used to initialize the proxy must itself have a `[[Construct]]` internal method (i.e. `new` target must be valid).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `construct()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)