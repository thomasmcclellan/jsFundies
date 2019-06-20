##### 6/20/2019
# `Atomics.store()`

```js
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)
uint8[0] = 5

console.log(Atomics.store(uint8, 0, 2)) // 2
console.log(Atomics.load(uint8, 0)) // 2
```

---

## Syntax:
`Atomics.store(typedArray, index, value)`

* **typedArray**: shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: position in the `typedArray` to store a `value` in
* **value**: number to store

## Return value:
Te value that has been stored.

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.store()` method stores a given value at the given position in the array and returns that value.

---

```js
// common buffer
const buffer = new ArrayBuffer(4)
// floating point
const float32 = new Float32Array(buffer)
// IEEE754 representation
const uint32 = new Uint32Array(buffer)

float32[0] = 0.5

console.log(`0px ${ uint32[0].toString(16) }`) // 0px 3f000000

// IEEE754 32-bit representation of 0.5
uint32[0] = 0x3f000000
console.log(float32[0]) / 0.5
```

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store)