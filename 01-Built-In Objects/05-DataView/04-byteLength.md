##### 7/08/2019
# `DataView.prototype.byteLength`

```js
const buffer = new ArrayBuffer(16)
const view1 = new DataView(buffer)
const view2 = new DataView(buffer, 12, 4) // from byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength) // 20
```

---

## Syntax:
`dataview.byteLength`

---

## Description:
The `byteLength` accessor property represents the length (in bytes) of this view from the start of its `ArrayBuffer` or `SharedArrayBuffer`.

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property.  The value is established when a `DataView` is constructed and cannot be changed.  If the `DataView` is not specifying an offset or a `byteLength`, the `byteLength` of the referenced `ArrayBuffer` or `SharedArrayBuffer` will be returned.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `byteLength` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength)