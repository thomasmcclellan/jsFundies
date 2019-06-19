##### 6/03/2019
# `Array.prototype.splice()`

```js
const months = ['Jan', 'March', 'April', 'June']

months.splice(1, 0, 'Feb')

console.log(months) // ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 0, 'May')

console.log(months) // ['Jan', 'Feb', 'March', 'April', 'May', 'June']
```

---

## Syntax:
`arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

* **start**: index at which to start changing the array. If `> arr.length`, `start` will be set to the length of the array.  If negative, it will begin that any eleents from the end of the array (with origin -1 meaning -n is the indx of the nth last element and istherefore equivalent to the index of `arr.length - n`).  If the absolute value of `start > arr.length`, it will begin from index 0.
* **deleteCount (optional)**: integer indicating the number of elements in the array to remove from `start`.
* **item1, item2, ... (optional)**: elements to add to the array, beginning from `start`.  If no elements are specified, `splice` will only remove element from the array.

## Return value:
An array containing the deleted elements.  If only one element is removed, an array of one element is returned.  If no elements are removed, an empty array is returned.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)