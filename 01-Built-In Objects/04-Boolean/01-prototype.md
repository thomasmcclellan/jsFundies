##### 6/21/2019
# `Boolean.prototype`

```js
const flag = new Boolean()

console.log(flag) // false
```

---

## Description:
The `Boolean.prototype` property representaas the prototype for the `Boolean` constructor.

| Property attributes of `Boolean.prototype` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`Boolean` instances inherit from `Boolean.prototype`.  You can use the constructor's prototype object to add properties or methods to all `Boolean` instances.

---

## Properties:
`Boolean.prototype.constructor`  
  > Returns the function that created an instnace's prototype.  This is the `Boolean` function by default.

## Methods:
`Boolean.prototype.toString`  
  > Returns a string of either `'true'` or `'false` depending upon the value of the object.  Overrides the `Object.prototype.toString()` method.  
  
`Boolean.prototype.valueOf()`  
  > Returns the primitive value of the `Boolean` object.  Overrides the `Object.prototype.valueOf()` method.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in JS 1.0 |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype)