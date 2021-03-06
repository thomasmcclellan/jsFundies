##### 9/26/2019
# `Error.prototype`
## Description:
The `Error.prototype` property represents the prototype for the `Error` constructor.

| Property attributes of `Error.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

  > All `Error` instances and instances of non-generic errors inherit from `Error.prototype`.  As with all constructor functions, you can use the prototype of the constructor to add properties or methods to all instances with that constructor.

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
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.1 |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `prototype` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype)