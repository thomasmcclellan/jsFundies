##### 5/13/2019
# `Array.prototype.indexOf()`

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison')) // 1

//* Starts from index 2
console.log(beasts.indexOf('bison', 2)) // 4

console.log(beasts.indexOf('giraffe')) // -1
```

---

## Syntax:
`arr.indexOf(searchElement[, fromIndex])`

* **searchElement**: element to locate in the array
* **fromIndex (optional)**: index to start the search at.  If the index >= arr.length, -1 is returned, which means the array will not be searched.  If the provided inex value is a negative number, it is taken as the offset from the end of the array.
  * **Note**: if the provided index is negative, the array is still searched from front to back.  If the provied index is 0, then the whole array will be searched.
  * Default is 0 (entire array is searched)

## Return value:
The first index of the element in the array that matches; -1 is not found.

---

  >`indexOf()` compares `searchElement` to elements of the array using strict equality (===).

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)