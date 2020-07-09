##### 6/17/2020
# `Promise.all()`

```js
const promise1 = Promise.resolve(3),
      promise2 = 42,
      promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)); // [3, 42, 'foo']
```

---

## Syntax:
`Promise.all(iterable)`

* **iterable**: An iterable `object`, such as an `array`.

## Return value:
  * An already resolved `Promise` if the iterable passed is empty.
  * An asynchronously resolved `Promise` if the iterable passed contains no `promises`. 

  > **NOTE**: `Google Chrome 58` returns an already resolved `promise` in this case.

  * A pending `Promise` in all other cases. This returned `promise` is then resolved/rejected asynchronously (as soon as the stack is empty) when all the `promises` in the given iterable have resolved, or if any of the `promises` reject. 

---

## Description:
The `Promise.all()` method returns a single `Promise` that fulfills when all of the `promises` passed as an iterable have been fulfilled, the iterable contains no `promises` or the iterable contains `promises` that have been fulfilled and non-`promises` that have been returned. It rejects with the reason of the first `promise` that rejects or with the error caught by the first argument, if that argument has caught an error inside it using try/catch/throw blocks.

It is typically used after having started multiple asynchronous tasks to run concurrently and having created `promises` for their results, so that one can wait for all the tasks being finished.

This method can be useful for aggregating the results of multiple `promises`.

### Fulfillment:
The returned `promise` is fulfilled with an `array` containing all the values of the iterable passed as argument (also non-promise values).

If an empty iterable is passed, then this method returns (synchronously) an already resolved `promise`.

If all of the passed-in `promises` fulfill, or are not `promises`, the `promise` returned by `Promise.all()` is fulfilled asynchronously.

### Rejection:
If any of the passed-in `promises` reject, `Promise.all()` asynchronously rejects with the value of the `promise` that rejected, whether or not the other `promises` have resolved.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `all()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)