##### 6/24/2019
# `Boolean.prototype.toString()`

```js
const flag1 = new Boolean(true)
const flag2 = new Boolean(1)

console.log(flag1.toString()) // true
console.log(flag2.toString()) // true
```

---

## Syntax:
`bool.toString()`

## Return value:
A string representing the specified `Boolean` object.

---

## Description:
The `toString()` methods returns a string representing the specified Boolean object.

The `Boolean` object overrides the `toString` method of the `Object` object; it does not inherit `Object.prototype.toString()`.  For Boolean objects, the `toString` method returns a string representation of the object.

JS calls the `toString` method automatically when a `Boolean` is to be represented as a text value or when a `Boolean` is referred to in a string concatenation.

For `Boolean` objects and values, the built-in `toString` method returns the string `'true'` or `'false'`, depending on the value of the boolean object.

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
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString)