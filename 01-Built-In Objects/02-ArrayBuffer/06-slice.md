##### 6/18/2019
# `ArrayBuffer.prototype.slice()`

```js
const buffer = new ArrayBuffer(16)
const int32View = new Int32Array(buffer)
// produces Int32Array [0, 0, 0, 0]

int32View[1] = 42
const sliced = new Int32Array(buffer.slice(4, 12))
// produces Int32Array [42, 0]

console.log(sliced[0]) / 42
```

---

## Syntax:
`arraybuffer.slice(begin[, end])`

* **begin**: zero-based byte index at which to begin slicing 
* **end**: byte index before which to end slicing.  If `end` is unspecified, the new `ArrayBuffer` contains all bytes from `begin` to the end of this `ArrayBuffer`.  The range specified by `begin` and `end` is clamped to th valid index range for the current array.  If the computed length of the new `ArrayBuffer` would be negative, it is clamped to zero.

## Return value:
A new `ArrayBuffer` object.

---

## Description:
The `slice` method copies up to, but not including, the byte indicated by the `end` parameter.  If either `begin` or `end` is negative, it refers to an index from the end of the array; as opposed to from the beginning.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)