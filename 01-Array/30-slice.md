##### 5/29/2019
# `Array.prototype.slice()`

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)) // ['camel', 'duck', 'elephant']
console.log(animals.slice(2, 4)) // ['camel', 'duck']
console.log(animals.slice(1, 5)) // ['bison', 'camel', 'duck', 'elephant']
```
---

## Syntax:
`arr.slice([begin[, end]])`

* **begin (optional)**: zero-based index at which to begin extraction. A negative index can be used, indicating an offset from the end of the sequence.  `slice(-2)` extracts the last two elements in the sequence. If `begin` is undefined, `slice` begins from index 0. If `begin > arr.length`, an empty array is returned
* **end (optional)**: zero-based inex before wich to end extraction. `slice` extracts up to but not including `end`

## Return value:
A new array containing the extracted elements

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)