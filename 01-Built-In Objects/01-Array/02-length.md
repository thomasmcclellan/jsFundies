##### 4/18/2019
# `Array.length`

```js
let clothing = ['shoes', 'shirts', 'socks', 'sweaters']

console.log(clothing.length) // 4

let nameListA = new Array(9876543210)
let nameListC = new Array(-100)

nameListA.length // RangeError: Invalid array length
nameListC.length // RangeError: Invalid array length

let nameListB = []
nameListB.length = Math.pow(2,32) - 1 // set array length less than 2^32

console.log(nameListB.length) // 4294967295

const arr = [1, 2]
arr.length = 5 // set array length to 5 while currently 2
console.log(arr) // [1, 2, , , ]
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)