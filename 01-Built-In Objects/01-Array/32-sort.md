##### 5/31/2019
# `Array.prototype.sort()`

```js
const months = ['March', 'Jan', 'Feb', 'Dec']

months.sort()

console.log(months) // ['Dec', 'Feb', 'Jan', 'March'] - Alphabetical

const numbers = [1, 30, 4, 21, 100000]

numbers.sort()

console.log(numbers) // [1, 100000, 21, 30, 4]
```

---

## Syntax:
`arr.sort([compareFunction])`

* **compareFunction (optional)**: specifies a function that defines the sort order.  If omitted, the array elements are converted to strings, then sorted according to each character's `unicode` code point value.
  * **firstE1**: first element for comparison
  * **secondE1**: second element for comparison 

## Return value:
The sorted array.  
**NOTE**: the array is sorted **IN PLACE**, and no copy is made.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)