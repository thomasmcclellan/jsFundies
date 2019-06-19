##### 6/14/2019
# `ArrayBuffer.prototype.byteLength`

```js
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8)

// Use byteLength to check the size
const bytes = buffer.byteLength

console.log(bytes) // 8
```

---

## Syntax:
`arrbuff.byteLength`

---

## Description:
The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property.  The value is established when the array is constructed and cannot be changed.  This property returns 0 is this `ArrayBuffer` has been detached.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength)