##### 5/07/2019
# `Array.prototype.flat()`

```js
const arr1 = [1, 2, [3, 4]]
console.log(arr1.flat()) // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat()) // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2)) // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, , 4, 5]
console.log(arr4.flat()) // [1, 2, 4, 5]
```

---

## Syntax:
`arr.flat([depth])`

* **depth (optional)**: the depth level specifying how deep a nestd array structure should be flattened; defaults to 1

## Return value:
A new array with the sub-array elements concatenated into it

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All others</span><br>
**Compatibility Unknown**: NA  
<span style="color: red">**No Support**:  
  &nbsp; &nbsp; &nbsp; Edge  
  &nbsp; &nbsp; &nbsp; IE  
  &nbsp; &nbsp; &nbsp; Edge Mobile  
  &nbsp; &nbsp; &nbsp; Samsung Internet
</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)