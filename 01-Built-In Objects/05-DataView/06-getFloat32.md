##### 7/10/2019
# `DataView.prototype.getFloat32()`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)

view.setFloat32(1, Math.PI)

console.log(view.getFloat32(1)) // 3.1415927410125732
```

---

## Syntax:
`dataview.getFloat32(byteOffset [, littleEndian])`

* **byteOffset**: offset, in bytes, from the start ofthe view where to read the data
* **littleEndian** (Optional): indicates whether the 32-bit float is stored in little (or big) endian format.  If `false` or `undefined`, a big-endian value is read 

## Return value:
A signed 32-bit float number.

## Error Thrown:
**<span style="color: red">RangeError</span>**: thrown if the `byteOffset` is set such as it would read beyond the end of the view.

---

## Description:
The `getFloat32()` method gets a signed 32-bit float (float) at the specified byte offset from the start of the `DataView`.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32)