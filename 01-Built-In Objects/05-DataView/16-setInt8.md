##### 7/16/2019
# `DataView.prototype.setInt8()`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)

view.setInt8(1, 127) // max signed 8-bit integer

console.log(view.getInt8(1)) // 127
```

---

## Syntax:
`dataview.setInt8(byteOffset, value)`

* **byteOffset**: offset, in byte, from the start of the view where to read the data
* **value**: value to be set

## Return value:
`undefined`.

## Errors Thrown:
**<span style="color: red">RangeError</span>**: thrown if the `byteOffset` is set such as it would read beyond the end of the view.

---

## Description:
The `setInt8()` method stores a signed 8-bit integer (byte) at the specified byte offset from the start of the `DataView`.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8)