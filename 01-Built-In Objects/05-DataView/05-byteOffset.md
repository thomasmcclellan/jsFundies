##### 7/09/2019
# `DataView.prototype.byteOffset`

```js
const buffer = new ArrayBuffer(16)
const view = new DataView(buffer, 12, 4) // from byte 12 for the next 4 bytes

console.log(view.byteOffset) // 12
```

---

## Syntax:
`dataview.byteOffset`

---

## Description:
The `byteOffset` accessor property reprsents the offset (in bytes) of this view fromthe start of `ArrayBuffer` or `SharedArrayBuffer`.

The `byteOffset` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property.  The value is estabished when a `DataView` is constructed and cannot be changed.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `byteOffset` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset)