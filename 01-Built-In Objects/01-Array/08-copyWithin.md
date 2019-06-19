##### 4/26/2019
# `Array.prototype.copyWithin()`

```js
let array1 = ['a', 'b', 'c', 'd', 'e']
console.log(array1.copyWithin(0, 3, 4)) // ['d', 'b', 'c', 'd', 'e']

console.log(array1.copyWithin(1, 3)) // ['d', 'd', 'e', 'd', 'e']
```

---

## Syntax:
`arr.copyWithin(target[, start[, end]])`

* **target**: zero based index at which to copy the sequence to.  If negative, target will be counted from the end.  If `target = || > arr.length`, nothing will be copied; if `target` is positioned after `start`, the copied sequence will be trimmed to fit `arr.length`.
* **start (optional)**: zero based index at which to start copying elements from.  If negative, `start` will be counted from the end.
* **end (optional)**: zero based index at which to end copying element from.  `copyWithin` copies up but not including `end`.  If negative, `end` will be counted from the end.  If `end` is omitted, `copyWithin` will copy until the end (default to `arr.length`)

## Return value:
The modified array.

---

## Description:
The `copyWithin` works like C or C++'s memmove, and is a high-performance method to shift the date of an Array.  This especially applies to the `TypedArray` method of the same name.  The sequence is copied and pasted as one operation; pasted sequence will have the copied values even when the copy and past region overlap.

The `copyWithin` function is intentionally generic, it does not require that its `this` value be an Array object.

The `copyWithin` method is a mutable method.  It does not alter the length of `this`, but will change its content and create new properties if necessary.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All others</span>  
**Compatibility Unknown**: NA  
<span style="color: red">**No Support**: IE</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)