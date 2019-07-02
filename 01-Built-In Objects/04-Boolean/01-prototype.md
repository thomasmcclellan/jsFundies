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
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/prototype)