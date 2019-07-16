##### 7/16/2019
# `DataView.prototype.getUint32()`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)

view.setUint32(1, 4294967295) // max unsigned 32-bit integer

console.log(view.getUint32(1)) // 4294967295
```

---

## Syntax:
`dataview.getUint32(byteOffset [, littleEndian])`

* **byteOffset**: offset, in byte, from the start of the view where to read the data
* **littleEndian** (Optional): indicates whether the 32-bit int is stored in little (or big) endian format.  If `false` or `undefined`, a big-endian value is read.  

## Return value:
An unsigned 32-bit integer number.

## Errors Thrown:
**<span style="color: red">RangeError</span>**: thrown if the `byteOffset` is set such as it would read beyond the end of the view.

---

## Description:
The `getUint32()` method gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the `DataView`.

There is no alignment constraint; multi-byte values may be fetched from any offset.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32)