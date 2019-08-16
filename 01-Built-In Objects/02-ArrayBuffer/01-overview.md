##### 6/12/2019
# ArrayBuffer Overview

```js
const buffer = new ArrayBuffer(8)

console.log(buffer.byteLength) // 8
```

## Syntax
`new ArrayBuffer(length)`

* **length:** size, in bytes, of the array buffer to create

## Return value
A new --ArrayBuffer-- object of the specified size.  Its contents are intiialized to 0.

## Exceptions
A `RangeError` is thrown if the `length` is larger than `Number.MAX_SAFE_INTEGER (>= 2 ** 53)` or negative.

---

## Description
The `ArrayBuffer` object is used to represent a generic, fixed-length raw binary data buffer.

It is an array of bytes, often refered to in other languages as a 'byte array'.

You cannot directly manipulate the contents of an `ArrayBuffer`; instead, you create one of the type array objects or a  `DataView` object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

---

## Properties:
`ArrayBuffer.length`  
`get ArrayBuffer[@@species]`  
`ArrayBuffer.prototype`

## Methods:
`ArrayBuffer.isView(arg)`

## Instances:
**All `ArrayBuffer` instances inherit from `ArrayBuffer.prototype`.**

### Properties:
`ArrayBuffer.prototype.constructor`  
`ArrayBuffer.prototype.byteLength`

### Methods:
`ArrayBuffer.prototype.slice()`

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an ECMA standard.  Specified that `new` is required. |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `ArrayBuffer` | `ArrayBuffer()` without `new` throws | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**7**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**44**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> | <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**44**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> | <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)