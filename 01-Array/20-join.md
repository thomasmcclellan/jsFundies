##### 5/14/2019
# `Array.prototype.join()`

```js
const elements = ['Earth', 'Fire', 'Wind', 'Water']

console.log(elements.join()) // Earth,Fire,Wind,Water
console.log(elements.join('')) // EarthFireWindWater
console.log(elements.join('-')) // Earth-Fire-Wind-Water
```

---

## Syntax:
`arr.join([separator])`

* **separator (optional)**: specifies a string to separate each pair of adjacent elements of the array.  The separator is convertered to a string if necessary.  If omitted, the array elements are separated with a comma.  If the separator is an empty string, all elements are joined without any characters between them.

## Return value:
A string with all array elements joined.  If `arr.length` is 0, the empty string is returned.

---

  >If an element in the array is `undefined` or `null`, it is converted to an empty string.

---

```js
function joined(first, second, third) {
  const values = Array.prototype.join.call(arguments)
  console.log(values) // '1,a,true'
}

joined(1, 'a', true)
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition. Implemented in JS 1.1 |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)