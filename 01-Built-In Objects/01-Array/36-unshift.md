##### 6/06/2019
# `Array.prototype.unshift()`

```js
const arr1 = [1, 2, 3]

console.log(arr1.unshift(4, 5)) // 5
console.log(arr1) // [4, 5, 1, 2, 3]
```

---

## Syntax:
`arr.unshift(element1[, ...[, elementN]])`

* **elementN**: elements to add to the front of the array

## Return value:
The new `length` property of the object upon which the method was called

---

  >`unshift` operates the same as `push`, with exception that it pushes to the front of the array, rather than the end.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 3rd Edition | 1999 | Standard | Initial definition. Implemented in JS 1.2 |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)