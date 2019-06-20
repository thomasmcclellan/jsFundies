##### 6/20/2019
# `Atomics.exchange()`

```js
const buffer = new SharedArrayBuffer(16)
const uint8 = new Uint8Array(buffer)
uint8[0] = 5

console.log(Atomics.load(uint8, 0)) // 5

console.log(Atomics.exchange(uint8, 0, 2)) // 5
console.log(Atomics.load(uint8, 0)) // 2
```

---

## Syntax:
`Atomics.exchange(typedArray, index, value)`

* **typedArray**: shared integer typed array.  One of `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, or `Uint32Array`
* **index**: position in the `typedArray` to exchange a `value`
* **value**: number to exchange

## Return value:
The old value at the given postion (`typedArray[index]`)

## Exceptions:
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not one of the allowed integer types
* Throws a <span style="color: red">TypeError</span>, if `typedArray` is not a shared typed array type
* Throws a <span style="color: red">RangeError</span>, if `index` is out of bounds in the `typedArray`

---

## Description:
The static `Atomics.exchange()` method stores a given value at a given position in the array and returns the old value at that position.  This atomic operation guarentees that no other write happens between the read of the old value and the write of the new value.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange)