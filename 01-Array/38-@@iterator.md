##### 6/10/2019
# `Array.prototype[@@iterator]()`

## Syntax:
`arr[Symbol.iterator]()`

## Return value:
The initial value given by the `values` iterator.  By default, using `arr[Symbol.iterator]` will return the `values` function.

---

```js
const arr = ['a', 'b', 'c', 'd', 'e']
const eArr = arr[Symbol.iterator]()

for (let letter of eArr) console.log(letter) // a b c d e
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
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: IE</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)