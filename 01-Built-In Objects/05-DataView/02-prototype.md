##### 7/02/2019
# `DataView.prototype`

## Description:
The `DataView.prototype` property represents the prototype for the `DataView` object.

| Property attributes of `DataView.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`DataView` instances inherit from `DataView.prototype`.  As with all constructors, you can change the constructor's prototype object to make changes to all `DataView` instances.

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
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition. |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/prototype)