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

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All others</span>  
<span style="color: lightblue">**Compatibility Unknown**: Edge Mobile</span>  
<span style="color: red">**No Support**: IE</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)