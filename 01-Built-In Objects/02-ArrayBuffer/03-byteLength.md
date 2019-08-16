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
| `byteLength` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**7**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength)