##### 6/24/2020
# `Promise.race()`

```js
const promise1 = new Promise((res, rej) => setTimeout(res, 500, 'one')),
      promise2 = new Promise((res, rej) => setTimeout(res, 100, 'two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value)); // two - both resolve, but promise2 is faster
```

---

## Syntax:
`Promise.race(iterable)`

* **iterable**: An iterable `object`, such as an `array`.

## Return value:
A **pending** `Promise` that _asynchronously_ yields the value of the first promise in the given iterable to fulfill or reject.

---

## Description:
The `Promise.race()` method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

The `race()` method returns a `Promise` that is settled the same way (and takes the same value) as the first promise that settles amongst the promises of the iterable passed as an argument.

If the iterable passed is empty, the promise returned will be forever pending.

If the iterable contains one or more non-promise value and/or an already settled promise, then `Promise.race()` will resolve to the first of these values found in the iterable.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `race()` | Browser | Platform |
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

[MDN Docs]()