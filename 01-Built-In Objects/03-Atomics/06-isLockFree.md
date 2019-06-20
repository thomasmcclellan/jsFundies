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
<span style="color: lightgreen">**Full Support**:  
  &nbsp; &nbsp; &nbsp; Chrome  
  &nbsp; &nbsp; &nbsp; Firefox  
  &nbsp; &nbsp; &nbsp; Firefox for Android  
  &nbsp; &nbsp; &nbsp; Node.js  
</span>
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: All others</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree)