##### 5/20/2019
# `Array.prototype.pop()`

```js
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

console.log(plants.pop()) // tomato
console.log(plants) // ['broccoli', 'cauliflower', 'cabbage', 'kale']

plants.pop()

console.log(plants) //['broccoli', 'cauliflower', 'cabbage']
```

---

## Syntax:
`arr.pop()`

## Return value:
The removed element from the array; `undefined` if the array is empty

---

## Description:
`pop` removes the last element from an array and retursn said value to the caller.

`pop` is intentionally generic; this method can be **CALLED** or **APPLIED** to objects resembling arrays.  Objects which do not contain a `length` property reflecting the last in the series of consecutive, zero-based numerical properties may not behave in any meaningful manner.

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)