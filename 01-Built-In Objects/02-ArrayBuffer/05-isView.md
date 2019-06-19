##### 6/18/2019
# `ArrayBuffer.isView()`

```js
const buffer = new ArrayBuffer(16)

console.log(ArrayBuffer.isView(new Int32Array())) // true
```

---

## Syntax:
`ArrayBuffer.isView(arg)`

* **arg**: argument to be checked 

## Return value:
`true` if the given argument is one of the `ArrayBuffer` views; otherwise, `false`.

---

```js
console.log(ArrayBuffer.isView()) // false
console.log(ArrayBuffer.isView([])) // false
console.log(ArrayBuffer.isView({})) // false
console.log(ArrayBuffer.isView(null)) // false
console.log(ArrayBuffer.isView(undefined)) // false
console.log(ArrayBuffer.isView(new ArrayBuffer(10))) // false
console.log(ArrayBuffer.isView(new Uint8Array())) // true
console.log(ArrayBuffer.isView(new Float32Array())) // true
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3))) // true

const arrBuff = new ArrayBuffer(2)
const dv = new DataView(arrBuff)
console.log(ArrayBuffer.isView(dv)) // true
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an ECMA standard |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView)