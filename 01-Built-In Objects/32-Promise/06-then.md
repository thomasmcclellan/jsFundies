##### 6/23/2020
# `Promise.prototype.then()`

```js
const promise1 = new Promise((res, rej) => res('Success'));

promise1
  .then(value => console.log(value)); // Success
```

---

## Syntax:
`p.then([onFulfilled [, onRejected]])`

* **onFullfilled** (Optional): A `function` called if the the `Promise` is fulfilled.  This `function` has one argument, the `fulfillment value`.  If it is not a `function`, it is internally replaced with an _Identity_ `function` (it returns the received argument).
* **onRejected** (Optional): A `function` called if the `Promise` is rejected.  This `function` has one argument, the `rejection reason`.  if it is not a `function`, it is internally replaced with a _Thrower_ `function` (it throws an error it received as an argument).

## Return value:
Once a `Promise` is fulfilled or rejected, the respective handler `function` (`onFulfilled` or `onRejected`) will be called _asynchronously_ (scheduled in the current thread loop). The behavior of the handler `function` follows a specific set of rules. If a handler `function`:
  * returns a value, the `promise` returned by `then` gets resolved with the returned value as its value.
  * doesn't return anything, the `promise` returned by `then` gets resolved with an `undefined` value.
  * throws an error, the `promise` returned by `then` gets rejected with the thrown error as its value.
  * returns an already fulfilled `promise`, the `promise` returned by `then` gets fulfilled with that `promise`'s value as its value.
  * returns an already rejected `promise`, the `promise` returned by `then` gets rejected with that `promise`'s value as its value.
  * returns another pending `promise` `object`, the resolution/rejection of the `promise` returned by `then` will be subsequent to the resolution/rejection of the `promise` returned by the handler. Also, the resolved value of the `promise` returned by then will be the same as the resolved value of the `promise` returned by the handler.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: 

---

## Description:
The `Promise.prototype.then()` method returns a `Promise`.  It takes two arguments: callback `functions` for the success/failure cases of the `Promise`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `then()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)