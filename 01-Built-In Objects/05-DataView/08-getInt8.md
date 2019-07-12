##### 7/12/2019
# `DataView.prototype.getInt8()`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)

view.setInt8(1, 127) // max signed 8-bit integer

console.log(view.getInt8(1)) // 127
```

---

## Syntax:
`dataview.getInt8(byteOffset)`

* **byteOffset**: offset, in byte, from the start of the view where to read the data 

## Return value:
A signed 8-bit integer number.

## Errors Thrown:
**<span style="color: red">RangeError</span>**: thrown in the `byteOffset` is set such as it would read beyond the end of the view.

---

## Description:
The `getInt8()` method gets a signed 8-bit integer (byte) at the specified byte offset from the start of the `DataView`. 

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8)