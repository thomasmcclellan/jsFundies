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

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)