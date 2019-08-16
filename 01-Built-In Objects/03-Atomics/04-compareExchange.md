##### 6/20/2019
# `Atomics.compareExchange()`

```js
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)
uint8[0] = 5

console.log(Atomics.compareExchange(uint8, 0, 5, 2)) // 5
console.log(Atomics.load(uint8, 0)) // 2

console.log(Atomics.compareExchange(uint8, 0, 5, 4)) // 2
console.log(Atomics.load(uint8, 0)) // 2
```

---

## Syntax:
`Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)`

* **typedArray**:  shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: position in the `typedArray` to exchange a `value`
* **expectedValue**: value to check for equality
* **replacementValue**: number to exchange

## Return value:
The old value at the given position (`typedArray[index]`).

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.compareExchange()` method exchanges a given replacement value at a given position in the array, if a given expected value equals the old value.  It returns the old value at that position whether it was equal to the expected value or not.  The atomic operation guarentees that no other write happens until the modified value is written back. 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition in ES2017 |

---

## Browser Compatibility:
| `compareExchange()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange)