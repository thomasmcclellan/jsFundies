##### 5/15/2019
# `Array.prototype.keys()`

```js
const array1 = ['a', 'b', 'c']
const iterator = array1.keys()

for (const key of iterator) {
  console.log(key) // 0, 1, 2
}
```

---

## Syntax:
`arr.keys()`

## Return value:
A new Array iterator object

---

```js
const arr = ['a', , 'c']
const sparseKeys = Object.keys(arr)
const denseKeys = [...arr.keys()]

console.log(sparseKeys) // ['0', '2']
console.log(denseKeys) // [0, 1, 2]
```

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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)