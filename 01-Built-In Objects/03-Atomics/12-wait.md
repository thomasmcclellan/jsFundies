##### 6/20/2019
# `Atomics.wait()`

## Syntax:
`Atomics.wait(typedArray, index, value[, timeout])`

* **typedArray**: shared `Int32Array`
* **index**: position in the `typedArray` to wait on
* **value**: expected value to test
* **timeout (optional)**: time to wait in milliseconds.  `Infinity`, if no time is provided  

## Return value:
A `String` which is either 'ok', 'not-equal', 'timed-out'.

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared `Int32Array`
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.wait()` method verifies that a given position in an `Int32Array` still contains a given value and if so sleeps, awaiting a wakeup or a timeout.  It returns a string which is either 'ok', 'not-equal', or 'timed-out'.

  > **NOTE**: This operation only works with a shared `Int32Array` and may not be allowed on the main thread.

---

  > Given a shared `Int32Array`:

```js
const sub = new SharedArrayBuffer(1024)
const int32 = new Int32Array(sab)
```

  > A reading thread is sleeping and waiting on location 0 which is expected to be 0.  As long as that is `true`, it will not go on.  However, once the writing thread has stored a new value, it will be notified by the writing thread and return the new value (123).

```js
Atomics. wait(int32, 0, 0)
console.log(int32[0]) // 123
```

  > A writing thread stores a new value and notifies the waiting thread once it has written:

```js
console.log(int32[0]) // 0
Atomics.store(int32, 0, 123)
Atomics.notify(int32, 0, 1)
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
| `wait()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**68**</span> | **Chrome** | Desktop | 
| <span style="color: red">**16-17***</span> | **Edge** || 
| <span style="color: lightgreen">**57^**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: red">**X**</span> | **Opera** || 
| <span style="color: red">**10.1 - ?**</span> | **Safari** || 
| <span style="color: red">**60-63``**</span> | **Android Webview** | Mobile | 
| <span style="color: red">**60-63``**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**57^**</span> | **Firefox for Android** || 
| <span style="color: red">**X**</span> | **Opera for Android** || 
| <span style="color: red">**X**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**8.10.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

  > *Support was removed to mitigate [speculative execution side-channel attacks](https://blogs.windows.com/msedgedev/2018/01/03/speculative-execution-mitigations-microsoft-edge-internet-explorer/).
 
  > ^ From version 57: this feature is behind the `javascript.options.shared_memory` preference (needs to be set to `true`).  To change preferences in Firefox, visit about:config.  
  > 
  > From version 46 - 55 (exclusive): this feature is behind the `javascript.options.shared_memory` prefernce (needs to be set to `true`).

  > `` Chrome disabled `SharedArrayBuffer` on January 5, 2018 to help reduce efficacy of [speculative side-channel attacks](https://www.chromium.org/Home/chromium-security/ssca).  This is intended as a temporary measure until other mitigations are in place.

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)