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

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `flat()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**69**</span> | **Chrome** | Desktop | 
| <span style="color: red">**X**</span> | **Edge** || 
| <span style="color: lightgreen">**62**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**56**</span> | **Opera** || 
| <span style="color: lightgreen">**12**</span> | **Safari** || 
| <span style="color: lightgreen">**69**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**69**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**62**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**48**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**12**</span> | **Safari on iOS** || 
| <span style="color: red">**X**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**11.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)