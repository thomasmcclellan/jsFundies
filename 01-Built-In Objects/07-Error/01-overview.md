##### 9/23/2019
# Error Overview
## Syntax:
`new Error([message[, fileName[, lineNumber]]])`

* **message** (Optional): human-readable description of the error
* **fileName** (Optional): value for the `fileName` property on the created `Error` object.  Defaults to the name of the file containing the code that called the `Error()` constructor *
* **lineNumber** (Optional):  value for the `lineNumber` property on the created `Error` object.  Defaults to the line number containing the `Error()` constructor invocation *

  > *<span style="color: red">This API is not standardized.</span>

---

## Description:
The `Error` constructor creates an error object.  Instances of `Error` objects are thrown when runtime errors occur.  The `Error` object can also be used as a base object for user-defined exceptions.

  >  Runtime errors result in new `Error` objects being created and thrown.

  > This page documents the use of the `Error` object itself and its use as a constructor function.  For a list of properties and methods inherited by `Error` instances, see [Error.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype).

### Used as a Function:
When `Error` is used like a function--without `new`, it will return an `Error` object.  Therefore, a mere call to `Error` will produce the same output that constructing an `Error` object via the `new` keyword would.

```js
// this:
const x = Error('I was created using a function call')

// has the same functionality as this:
const y = new Error('I was constructed view the `new` keyword!')
```

### Error Types:
Besides the generic `Error` constructor, there are other core error constructors in `JS`.  For client-side exceptions, see [Exception Handling Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Exception_handling_statements).

**EvalError** 
  > Creates an instance representing an error that occurs regarding the global function `eval()`.

**RangeError** 
  > Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.

**ReferenceError** 
  > Creates an instance representing an error that occurs when de-referencing an invalid reference.

**SyntaxError** 
  > Creates an instance representing a syntax error that occurs while parsing code in `eval()`.

**TypeError** 
  > Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

**URIError** 
  > Creates an instance representing an error that occurs when `encodeURI()` or `decodeURI()` are passed invalid parameters.

---

## Properties:
**`Error.prototype`**
  > Allows the addition of properties to `Error` instances.

## Methods: 
  > The global `Error` object contains no methods of its own, however, it does inherit some methods from the prototype chain.

## Error Instances:
All `Error` instances and instances of non-generic errors inherit from `Error.prototype`. As all constructor functions, you can use the prototype of the constructor to add properties or methods to all instances created with that constructor.

### Properties:
**`Error.prototype.constructor`**
  > Specifies the function that created an instance's prototype

**`Error.prototype.message`**
  > Error message.

**`Error.prototype.name`**
  > Error name.

### Methods:
**`Error.prototype.toString()`**
  > Returns a `string` representing the specified object.  Overrides the `Object.prototype.toString()` method.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.1 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Error` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**6**</span> | **IE** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)