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

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)