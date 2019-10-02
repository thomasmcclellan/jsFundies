##### 9/30/2019
# EvalError Overview
## Syntax:
`new EvalError([message[, `<span style="color: red">fileName</span>`[, `<span style="color: red">lineNumber</span>`]]])`

* **message** (Optional): human-readable description of the error 
* **fileName** (<span style="color: red">Not standardized</span>): name of the file containing the code that caused the exception
* **lineNumber** (<span style="color: red">Not standardized</span>): line number of the code that caused the exception

---

## Description:
The `EvalError` object indicates an error regarding the global `eval()` function.  This exception is not thrown by `JS` anymore, however the `EvalError` object remains for compatibility.

---

## Properties:
**`EvalError.prototype`**
  > Allows the addition of properties to an `EvalError` object.

## Methods: 
The global `EvalError` contains no methods of its own, it does inherit some methods through the `prototype` chain.

## `EvalError` Instances:
### Properties:
**`EvalError.prototype.constructor`**
  > Specifies the function that created an instance's `prototype`.

**`EvalError.prototype.message`**
  > Error message. Although `ECMA-262` specifies that `EvalError` should provide its own `message` property, in [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey), it inherits `Error.prototype.message`.

**`EvalError.prototype.name`**
  > Error name.  Inherited from `Error`.

**`EvalError.prototype.fileName`** (<span style="color: red">Not standardized</span>)
  > Path to file that raised this error.  Inherited from `Error`.

**`EvalError.prototype.lineNumber`** (<span style="color: red">Not standardized</span>)
  > Line number in file that raised this error.  Inherited from `Error`.

**`EvalError.prototype.columnNumber`** (<span style="color: red">Not standardized</span>)
  > Column number in file that raised this error.  Inherited from `Error`.

**`EvalError.prototype.stack`** (<span style="color: red">Not standardized</span>)
  > Stack trace.  Inherited from `Error`.

### Methods:
Although the `EvalError` prototype object does not contain any methods of its own, `EvalError` instances do inherit some methods through the `prototype` chain.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 3rd Edition | 1999 | Standard | Initial definition |
| ECMAScript 5.1 | 2011 | Standard | Not used in this specification. Present for backward compatibility |
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Not used in this specification. Present for backward compatibility |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `EvalError` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError)