##### 6/13/2019
# `ArrayBuffer.prototype`

## Description:
The `ArrayBuffer.prototype` property represents the prototype for the `ArrayBuffer` object.

As with all constructors, you can change the contructor's prototype object to make changes to all `ArrayBuffer` instances.

---

## Properties:
**`ArrayBuffer.prototype.constructor`**:
  >Specifies the function that creates an object's prototype.  The initial value is the standard built-in `ArrayBuffer` constructor.

**`ArrayBuffer.prototype.byteLength`**:
  >The size, in bytes, of the array.  This is established when the array is constructed and cannot be changed.  **Read only**.

## Methods:
**`ArrayBuffer.prototype.slice()`**:
  >Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin`, innclusive, up to `end`, exclusive.  If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype)