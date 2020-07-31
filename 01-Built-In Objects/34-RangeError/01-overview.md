##### 7/29/2020
# `RangeError` Overview
## Description:
A `RangeError` is thrown when trying to pass a value as an argument to a `function` that does not allow a range that includes the value.

This can be encountered when:
  * Passing a value that is not one of the allowed `string` values to `String.prototype.normalize()`
  * When attempting to create an `array` of an illegal length with the `Array` constructor
  * When passing bad values to the numeric methods `Number.prototype.toExponential()`, `Number.prototype.toFixed()` or `Number.prototype.toPrecision()`.

---

### Constructor:
**`RangeError()`**
  > Creates a new `RangeError` `object`.

---

## Instance Properties:
**`RangeError.prototype.message`**
  > Error message.  Although `ECMA-262` specifies that `RangeError` should provide its own `message` property, in `SpiderMonkey`, it inherits `Error.prototype.message`.

**`RangeError.prototype.name`**
  > Error name.  Inherited from `Error`.

**`RangeError.prototype.fileName`**
  > Path to file that raised this error.  Inherited from `Error`.

**`RangeError.prototype.lineNumber`**
  > Line number in file that raised this error.  Inherited from `Error`.

**`RangeError.prototype.columnNumber`**
  > Column number in line that raised this error.  Inherited from `Error`.

**`RangeError.prototype.stack`**
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
| `RangeError` | `RangeError()` constructor | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)