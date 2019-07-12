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
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength)