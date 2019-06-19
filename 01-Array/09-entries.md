##### 4/29/2019
# `Array.prototype.entries()`

```js
let array1 = ['a', 'b', 'c']
let iterator1 = array1.entries()

console.log(iterator1.next().value) // [0, 'a']
console.log(iterator1.next().value) // [1, 'b']
```

---

## Syntax:
`array.entries()`

## Return value:
A new Array iterator object

---

```js
const a = ['a', 'b', 'c']

for (const [index, element] of a.entries()) {
  console.log(index, element) // 0 'a', 1, 'b', 2 'c'
}

let iterator = a.entries()

for (let e of iterator) {
  console.log(e) // [0, 'a'] [1, 'b'] [2, 'c']
}
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)