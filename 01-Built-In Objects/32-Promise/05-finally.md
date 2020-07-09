##### 6/22/2020
# `Promise.prototype.catch()`

```js
const promise1 = new Promise((res, rej) => {
  throw 'Uh oh';
})

promise1.catch(err => console.error(err)); // Uh oh
```

---

## Syntax:
`p.catch(onRejected)`

* **onRejected**: A `function` called when the `Promise` is rejected.  This `function` has one argument:
  * **reason**: The rejection reason.

## Return value:
Internally calls `Promise.prototype.then` on the `object` once upon which it was called, passing the parameters `undefined` on the received `onRejected` handler.  Returns the value of that call, which is a `Promise`.

---

## Description:
The `Promise.prototype.catch()` method returns a `Promise` and deals with rejected cases only.  It behaves the same as calling `Promise.prototype.then()` (in fact, calling `obj.catch()`) internally calls `obj.then()`.  This means that you have to provide an `onRejected` function even if you want to fall back to an `undefined` result value; for example, `obj.catch(() => {})`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `catch()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**32**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**29**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**19**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**4.4.3**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**32**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**29**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**19**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)