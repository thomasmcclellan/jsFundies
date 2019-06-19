##### 5/15/2019
# `Array.prototype.lastIndexOf()`

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

console.log(animals.lastIndexOf('Dodo')) // 3
console.log(animals.lastIndexOf('Tiger')) // 1
```

---

## Syntax:
`arr.lastIndexOf(searchElement[, fromIndex])`

* **searchElement**: element to locate in the array
* **fromIndex (optional)**: index at which to start searching backwards.  Defaults to `arr.length - 1`, i.e. the whole array will be search.  If the index is >= `arr.length`, the whole array will be searched.  If negative, it is taken as the offset from the end of the array.
  * **NOTE**: even when the index is negative, the array is still searched from **BACK TO FRONT**.  

## Return value:
The last index of the element in the array; -1 is not found.

---

  >`lastIndexOf()` compares `searchElement` to elemets of the Array using strict equality (`===`).


---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 5.1 | 2011 | Standard | Initial definition |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
<span style="color: lightgreen">**Full Support**: All</span>  
**Compatibility Unknown**: NA  
**No Support**: NA

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)