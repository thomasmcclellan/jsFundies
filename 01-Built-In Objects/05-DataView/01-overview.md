##### 7/01/2019
# DataView Overview

```js
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16)

// Create a couple of views
const view1 = new DataView(buffer)
const view2 = new DataView(buffer, 12, 4) // from byte 12 for the next 4 bytes

view1.setInt8(12, 42) // put 42 in slot 12

console.log(view2.getInt8(0)) // 42
```

---

## Syntax:
`new DataView(buffer [, byteOffset [, byteLength]])`

* **buffer**: existing `ArrayBuffer` or `SharedArrayBuffer` (<span style="color: red">Not used in Production</span>) to use as the storage backing the new `DataView` object
* **byteOffset** (optional): offset, in bytes, to the first byte in the above buffer for the new view to reference.  If unspecified, the buffer view starts with the first byte
* **byteLength** (optional): number of elements in the byte array.  If unspecified, the view's length will match the buffer's length

## Return value:
A new `DataView` object representing the specified data buffer.

You can think of the returned object as an 'interpreter' of the array buffer of bytes--it knows how to convert numbers to fit within the buffer correctly, both when reading and writing to it.  This means handling integer and float conversion, endianness, and other details of representing numbers in binary form.

## Exceptions:
<span style="color: red">**RangeError**</span>
  > Thrown if the `byteOffset` or `byteLength` parameter values result in the view extending past the endof the buffer.  
  >
  > For example, if the buffer is 16 bytes long, the `byteOffset` is 9, and the `byteLength` is 10, this error is thrown because the resulting view tries to extend 2 bytes past the total length of the buffer.

---

## Description:

### Endiannes
Multi-byte number formats are represented in memory differently depending on machine architecture--see [Endianness](https://developer.mozilla.org/en-US/docs/Glossary/Endianness) for explanation.  `DataView` accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.

```js
const littleEndian = (function() {
  const buffer = new ArrayBuffer(2)

  new DataView(buffer).setInt16(0, 256, true /* littleEndian */)
  
  // Int16Array uses the plantform's endianness
  return new Int16Array(buffer)[0] === 256 
})()

console.log(littleEndian) // true
```

### 64-bit Integer Values
Because JS does not currently include standard support for 64-bit integer values, `DataView` does not offer native 64-bit opperations.  As a workaround, you could implement your own `getUint64()` function to obtain a value with precision up to `Number.MAX_SAFE_INTEGER`, which could suffice for certain cases:

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian)
  const right = dataview.getUint32(byteOffset + 4, littleEndian)

  // combine the two 32-bit values
  const combined = littleEndian ? left + 2**32 * right : 2**32 * left + right

  if (!Number.isSafeInteger(combined)) 
    console.warn(`${ combined } exceeds MAX_SAFE_INTEGER.  Precision may be lost.`)

  return combined
}
```

Alternatively, if you need full 64-bit range, you can create a `BigInt`:

```js
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = dataview.getUint32(byteOffset, littleEndian)
  const right = dataview.getUint32(byteOffset + 4, littleEndian)

  // combine the two 32-bit values
  const combined = littleEndian ? 
    right.toString(16) + left.toString(16).padStart(8, '0') : 
    left.toString(16) + right.toString(16).padStart(8, '0')

  return BigInt(`0x${ combined }`)
}
```

---

## Properties:
All `DataView` instances inherit from `DataView.prototype` and allows the addition of properties to all `DataView` objects.

**`DataView.prototype.constructor`**
  > Specifies the function that creates an object's prototype.  The initial value is the standard built-in `DataView` constructor.

**`DataView.prototype.buffer`**
  > The `ArrayBuffer` referenced by this view.  Fixed at construction time and thus **read only**.

**`DataView.prototype.byteLength`**
  > The length (in bytes) of this view from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.

**`DataView.prototype.byteOffset`**
  > The offset (in bytes) of this view from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.

## Methods: 
### Read:
**`DataView.prototype.getInt8()`**
  > Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.

**`DataView.prototype.getUint8()`**
  > Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.

**`DataView.prototype.getInt16()`**
  > Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.

**`DataView.prototype.getUint16()`**
  > Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.

**`DataView.prototype.getInt32()`**
  > Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.

**`DataView.prototype.getUint32()`**
  > Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.

**`DataView.prototype.getFloat32()`**
  > Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.

**`DataView.prototype.getFloat64()`**
  > Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.

**`DataView.prototype.getBigInt64()`**
  > Gets a signed 64-bit integer (long long) at the specified byte offset from the start of the view.

**`DataView.prototype.getBigUint64()`**
  > Gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the view.

### Write:
**`DataView.prototype.setInt8()`**
  > Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.

**`DataView.prototype.setUint8()`**
  > Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.

**`DataView.prototype.setInt16()`**
  > Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.

**`DataView.prototype.setUint16()`**
  > Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.

**`DataView.prototype.setInt32()`**
  > Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.

**`DataView.prototype.setUint32()`**
  > Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.

**`DataView.prototype.setFloat32()`**
  > Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.

**`DataView.prototype.setFloat64()`**
  > Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.

**`DataView.prototype.setBigInt64()`**
  > Stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the view.

**`DataView.prototype.setBigUint64()`**
  > Stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the view.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an ECMA standard |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `DataView` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)