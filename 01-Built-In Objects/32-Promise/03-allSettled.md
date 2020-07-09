##### 6/18/2020
# `Promise.allSettled()`

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises)
  .then((results) => results.forEach((result) => console.log(result.status)));
```

---

## Syntax:
`Promise.allSettled(iterable)`

* **iterable**: An iterable `object`, such as an `array`, in which each member is a `Promise`. 

## Return value:
A **pending** `Promise` that will be **asynchronously** fulfilled once every `promise` in the specified collection of `promises` has completed, either by successfully being fulfilled or by being rejected. At that time, the returned `promise`'s handler is passed as input an `array` containing the outcome of each `promise` in the original set of `promises`.

However, **if and only if** an empty iterable is passed as an argument, `Promise.allSettled()` returns a `Promise` object that has **already been resolved** as an empty `array`.

For each outcome `object`, a `status` `string` is present. If the status is `fulfilled`, then a value is present. If the status is `rejected`, then a `reason` is present. The value (or reason) reflects what value each `promise` was fulfilled (or rejected) with.

## Errors Thrown:
<span style="color: red">**RangeError**</span>: 

---

## Description:
The `Promise.allSettled()` method returns a `promise` that resolves after all of the given `promises` have either fulfilled or rejected, with an `array` of `objects` that each describes the outcome of each `promise`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `allSettled()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**76**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**79**</span> | **Edge** || 
| <span style="color: lightgreen">**71**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**63**</span> | **Opera** || 
| <span style="color: lightgreen">**13**</span> | **Safari** || 
| <span style="color: lightgreen">**76**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**76**</span> | **Chrome for Android** || 
| <span style="color: red">**X**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**54**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**13**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**12.9.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)