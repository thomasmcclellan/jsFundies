##### 6/27/2019
# `Boolean.prototype.valueOf()`

```js
const x = new Boolean()
const y = new Boolean('Mozilla')

console.log(x.valueOf()) // false
console.log(y.valueOf()) // true
```

---

## Syntax:
`bool.valueOf()`

## Return value:
The primitive value of the given `Boolean` object.

---

## Description:
The `valueOf()` method returns the primitive value of a `Boolean` object or literal `Boolean` as a Boolean data type.

  > This method is usually called internally by JS and not explicitly in code.

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
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)