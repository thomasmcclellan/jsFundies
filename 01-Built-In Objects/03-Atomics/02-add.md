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
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Chrome  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: All others</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add)