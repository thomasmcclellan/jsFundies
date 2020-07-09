##### 6/26/2020
# `Promise.resolve()`

```js
function resolved(result) {
  console.log('Resolved');
}

function resolveed(result) {
  console.error(result);
}

Promise.resolve(new Error('fail'))
  .then(resolved, resolveed); // Error: fail
```

---

## Syntax:
`Promise.resolve(value)`

* **value**: Argument to be resolved by this `Promise`. Can also be a `Promise` of a thenable to resolve.

## Return value:
A `Promise` that is resolved with the given value, or the promise passed as value, if the value was a promise `object`.

---

## Description:
The `Promise.resolve()` method returns a `Promise` object that is resolved with a given value. If the value is a promise, that promise is returned; if the value is a _thenable_ (i.e. has a `then` method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value. This `function` flattens nested layers of promise-like `objects` (e.g. a promise that resolves to a promise that resolves to something) into a single layer.

The static `Promise.resolve()` method returns a `Promise` that is resolved.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)