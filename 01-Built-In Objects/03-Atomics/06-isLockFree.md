##### 6/20/2019
# `Atomics.isLockFree()`

```js
console.log(Atomics.isLockFree(3)) // false
// 3 is not one of the BYTES_PER_ELEMENT values

console.log(Atomics.isLockFree(4)) // true
// 3 is one of the BYTES_PER_ELEMENT values
```

---

## Syntax:
`Atomics.isLockFree(size)`

* **size**: size in bytes per check  

## Return value:
A `boolean` indicating whether the operation is lock free

---

## Description: 
The static `Atomics.isLockFree()` method is used to determine whether to use locks or atomic operations.  It returns `true` if the given size is one of the `BYTE_PER_ELEMENT` property of integer `TypedArrays` types.

---

```js
console.log(Atomics.isLockFree(1)) // true
console.log(Atomics.isLockFree(2)) // true
console.log(Atomics.isLockFree(3)) // false
console.log(Atomics.isLockFree(4)) // true
console.log(Atomics.isLockFree(5)) // false
console.log(Atomics.isLockFree(6)) // false
console.log(Atomics.isLockFree(7)) // false
console.log(Atomics.isLockFree(8)) // false
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
| `isLockFree()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree)