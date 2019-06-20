##### 6/20/2019
# `Atomics.xor()`

```js
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)
uint8[0] = 7

console.log(Atomics.xor(uint8, 0, 2)) // 7
console.log(Atomics.load(uint8, 0)) // 5
```

---

## Syntax:
`Atomics.xor(typedArray, index, value)`

* **typedArray**: shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: position in the `typedArray` to compute the bitwise **XOR**
* **value**: number to compute the bitwise **XOR** with

## Return value:
Te old value at the given position (`typedArray[index]`).

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.xor()` method computes a bitwise **XOR** with a given value at a given postion in the array, and returns the old value at that position.  This atomic operation guarantees that no other write happens until the modified value is written back.

| a | b | a ^ b |
|:---:|:---:|:---:|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

For example, a bitwise **XOR** of 5 & 1 results in 0100 which is 4 in decimal

```js
5   0101
1   0001
    ----
4   0100
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor)