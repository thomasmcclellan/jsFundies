##### 6/20/2019
# `Atomics.add()`

```js
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)

uint8[0] = 7

// 7 + 2 = 9
console.log(Atomics.add(uint8, 0, 2)) // 7
console.log(Atomics.load(uint8, 0)) // 9
```

---

## Syntax:
`Atomics.add(typedArray, index, value)`

* **typedArray**: shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: position in the `typedArray` to add a `value` to
* **value**: number to add  

## Return value:
The old value at the given position (`typedArray[index]`).

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.add()` method adds a given value at a given position in the array and returns the old value at that position.  This atomic operation guarentees that no other write happens until the modified value is written back.

---

```js
const sab = new SharedArrayBuffer(1024)
const ta = new Uint8Array(sab)

// Returns 0, the old value
console.log(Atomics.add(ta, 0, 12)) // 0
console.log(Atomics.load(ta, 0)) // 12
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
| `add()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add)