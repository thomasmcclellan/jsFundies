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
| `prototype` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/prototype)