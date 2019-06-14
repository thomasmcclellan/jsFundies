##### 5/28/2019
# `Array.prototype.shift()`

```js
const array1 = [1, 2, 3]
const firstElement = array1.shift()

console.log(array1) // [2, 3]
console.log(firstElement) // 1
```

---

## Syntax:
`arr.shift()`

## Return value:
The removed element from the array; `undefined` if the array is empty.

---

## Description:
`shift` removes the element at the 0th index and shifts the values at consecutive indexes down, then returns the removed value.  If the `length` property is 0, `undefined` is returned.

`shift` is similar to `pop`, where it only takes from the front, where `pop` takes from the end.

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)