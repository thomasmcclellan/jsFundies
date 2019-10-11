##### 10/08/2019
# `Function.prototype`
## Description:
The `Function.prototype` property represents the `Function` prototype object.

`Function` objects inherit from `Function.prototype`.  `Function.prototype` cannot be modified.

---

## Properties:
**`Function.prototype.length`**
  > Specifies the number of arguments expected by the `function`.

**`Function.prototype.name`**
  > The name of the `function`.

**`Function.prototype.constructor`**
  > Specifies the `function` that creates an `object`'s prototype.

## Methods:
**`Function.prototype.apply()`**
  > Calls a `function` and sets its `this` to the provided value, arguments can be passed as an `Array` object.

**`Function.prototype.bind()`**
  > Creates a new `function` which, when called, has its `this` set to the provided value, with a given sequence of arguments preceding any provided when the new `function` was called.

**`Function.prototype.call()`**
  > Calls (executes) a `function` and sets its `this` to the provided value, arguments can be passed as they are.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in `JS 1.1` |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)