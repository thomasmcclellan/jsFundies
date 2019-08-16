##### 7/16/2019
# `DataView.prototype.setInt16()`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer)

view.setInt16(1, 32767) // max signed 16-bit integer

console.log(view.getInt16(1)) // 32767
```

---

## Syntax:
`dataview.getInt16(byteOffset, value [, littleEndian])`

* **byteOffset**: offset, in byte, from the start of the view where to read the data
* **value**: value to be set
* **littleEndian** (Optional): indicates whether the 16-bit int is stored in little (or big) endian format.  If `false` or `undefined`, a big-endian value is read.  

## Return value:
`undefined`.

## Errors Thrown:
**<span style="color: red">RangeError</span>**: thrown if the `byteOffset` is set such as it would read beyond the end of the view.

---

## Description:
The `setInt16()` method stores a signed 16-bit integer (short) at the specified byte offset from the start of the `DataView`.

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
| `setInt16()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**9**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**15**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> | **IE** || 
| <span style="color: lightgreen">**12.1**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**15**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16)