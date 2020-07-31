##### 7/30/2020
# `ReferenceError` Overview
## Description:
The `ReferenceError` object represents an error when a non-existent variable is referenced.

---

### Constructor:
**`ReferenceError()`**
  > Creates a new `ReferenceError` `object`.

---

## Instance Properties:
**`ReferenceError.prototype.message`**
  > Error message.  Although `ECMA-262` specifies that `ReferenceError` should provide its own `message` property, in `SpiderMonkey`, it inherits `Error.prototype.message`.

**`ReferenceError.prototype.name`**
  > Error name.  Inherited from `Error`.

**`ReferenceError.prototype.fileName`**
  > Path to file that raised this error.  Inherited from `Error`.

**`ReferenceError.prototype.lineNumber`**
  > Line number in file that raised this error.  Inherited from `Error`.

**`ReferenceError.prototype.columnNumber`**
  > Column number in line that raised this error.  Inherited from `Error`.

**`ReferenceError.prototype.stack`**
  > Stack trace.  Inherited from `Error`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `ReferenceError` | `ReferenceError()` constructor | Browser | Platform |
|---|---|---|---|---|
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**5**</span> | <span style="color: lightgreen">**5**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.1.100**</span> | <span style="color: lightgreen">**0.1.100**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)