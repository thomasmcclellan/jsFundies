##### 4/25/2019
# `Array.prototype.concat()`

```js
let array1 = ['a', 'b', 'c']
let array2 = ['d', 'e', 'f']

console.log(array1.concat(array2)) // ['a', 'b', 'c', 'd', 'e', 'f']
```

---

## Syntax:
`let new_array = old_array.concat([value1[value2[, ...[, valueN]]]])`

* **valueN (optional)**: arrays and/or values to concatenate into a new array.  If all `valueN` parameters are omitted, `concat` returns a shallow copy of the existing array on which it is called.

## Return value:
A new Array instance.

---

## Description:
The `concat` method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).  It does not recurse into nested array arguments.

The `concat` method does not alter `this` or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays.  Elements of the original arrays are copied into the new array as follows:

  >Object references (and not the actual object): `concat` copies object references into the new array.  Both the original and new array refer to the same object.  That is, if a referenced object is modified, the changes are visible to both the new and original arrays.  This includes elements of array arguments that are also arrays.

---

```js
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]

const numbers = num1.concat(num2, num3) 
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9]


const letters = ['a', 'b', 'c']

const alphaNumeric = letters.concat(1, [2, 3]) 
console.log(alphaNumeric) // ['a', 'b', 'c', 1, 2, 3]


const number1 = [[1]]
const number2 = [2, [3]]

const moreNumbers = number1.concat(number2) 
console.log(moreNumbers) // [[1], 2, [3]]

number1[0].push(4)

console.log(moreNumbers) // [[1, 4], 2, [3]]
```

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)