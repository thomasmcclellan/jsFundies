##### 6/16/2020
# `Promise` Overview
The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

---

## Description:
A `Promise` is a proxy for a value not necessarily known when the `promise` is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a `promise` to supply the value at some point in the future.

A `Promise` is in one of these states:
  * _pending_: initial state, neither fulfilled nor rejected.
  * _fulfilled_: meaning that the operation completed successfully.
  * _rejected_: meaning that the operation failed.

A pending `promise` can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a `promise`'s then method are called. (If the `promise` has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

  > As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

![Promises](../.../../../Assets/promises.png)

  > **Not to be confused with**: Several other languages have mechanisms for lazy evaluation and deferring a computation, which they also call "promises", e.g. `Scheme`. `Promises` in `JS` represent processes that are already happening, which can be chained with callback `functions`. If you are looking to lazily evaluate an expression, consider the arrow `function` with no arguments: `f = () => expression` to create the lazily-evaluated expression, and `f()` to evaluate.

  > **NOTE**: A `promise` is said to be settled if it is either fulfilled or rejected, but not pending. You will also hear the term resolved used with `promises` — this means that the `promise` is settled or “locked in” to match the state of another `promise`. States and fates contains more details about `promise` terminology.

---

### Constructor:
**`Promise()`**
  > Creates a new `Promise` object. The constructor is primarily used to wrap `functions` that do not already support `promises`.

---

### Static Methods:
**`Promise.all()`**
  > Wait for all `promises` to be resolved, or for any to be rejected.
  >
  > If the returned `promise` resolves, it is resolved with an aggregating `array` of the values from the resolved `promises`, in the same order as defined in the iterable of multiple `promises`.
  >
  > If it rejects, it is rejected with the reason from the first `promise` in the iterable that was rejected.

**`Promise.allSettled()`**
  > Wait until all `promises` have settled (each may resolve or reject).
  >
  > Returns a `promise` that resolves after all of the given `promises` have either resolved or rejected, with an `array` of `objects` that each describe the outcome of each `promise`.

**`Promise.race()`**
  > Wait until any of the `promises` is resolved or rejected.
  >
  > If the returned `promise` resolves, it is resolved with the value of the first `promise` in the iterable that resolved.
  >
  > If it rejects, it is rejected with the reason from the first `promise` that was rejected.

**`Promise.reject()`**
  > Returns a new `Promise` object that is rejected with the given reason.

**`Promise.resolve()`**
  > Returns a new `Promise` object that is resolved with the given value. If the value is a _thenable_ (i.e. has a then method), the returned `promise` will "follow" that _thenable_, adopting its eventual state; otherwise the returned `promise` will be fulfilled with the value.
  >
  > Generally, if you don't know if a value is a `promise` or not, `Promise.resolve()` it instead and work with the return value as a `promise`.

---

## Instance Methods:
**`Promise.prototype.catch()`**
  > Appends a rejection handler callback to the `promise`, and returns a new `promise` resolving to the return value of the callback if it is called, or to its original fulfillment value if the `promise` is instead fulfilled.

**`Promise.prototype.then()`**
  > Appends fulfillment and rejection handlers to the `promise`, and returns a new `promise` resolving to the return value of the called handler, or to its original settled value if the `promise` was not handled (i.e. if the relevant handler `onFulfilled` or `onRejected` is not a `function`).

**`Promise.prototype.finally()`**
  > Appends a handler to the `promise`, and returns a new `promise` that is resolved when the original `promise` is resolved. The handler is called when the `promise` is settled, whether fulfilled or rejected.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Promise` | Browser | Platform |
|---|---|---|---|
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)