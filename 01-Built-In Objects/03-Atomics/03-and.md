##### 6/20/2019
# `Atomics.and()`

```js
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)

uint8[0] = 7

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2)) // 7
console.log(Atomics.load(uint8, 0)) // 2
```

---

## Syntax:
`Atomics.and(typedArray, index, value)`

* **typedArray**: shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: psotion in the `typedArray` to compute the bitwise **AND**
* **value**: number to compute the bitwise **AND** with

## Return value:
The old value at the given position (`typedArray[index]`).

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.and()` method computes a bitwise **AND** with a given value at a given position in the array, and returns the old value at that position.  This atomic operation guarentees that no other write happens until the modified value is written back.

The bitwise **AND** operation only yields 1, if both `a` and `b` are 1.  The truth table for the **AND** operation is:

| a | b | a & b |
|:---:|:---:|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

For example, a bitwise **AND** of 5 & 1 results in 0001, which is 1 in decimal.

```js
5   0101
1   0001
    ----
1   0001
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and)