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
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Chrome  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: All others</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange)