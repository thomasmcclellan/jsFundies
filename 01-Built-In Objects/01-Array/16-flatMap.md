##### 5/08/2019
# `Array.prototype.flatMap()`

```js
const arr1 = [1, 2, 3, 4]

console.log(arr1.map(x => [x * 2])) // [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2])) // [2, 4, 6, 8]
console.log(arr1.flatMap(x => [[x * 2]])) // [[2], [4], [6], [8]]

const arr2 = ['It is sunny in', '', 'California']

console.log(arr2.map(x => x.split(' '))) // [['It', 'is', 'sunny', 'in'], [''], ['California']]

console.log(arr2.flatMap(x => x.split(' '))) // ['It', 'is', 'sunny', 'in', '', 'California']
```

  ---

## Syntax:
`arr.flatMap(function callback(currentValue[, index[, array]])) {
  return element for new_array
}[, thisArg])`

* **callback**: function that produces an element of the new Array, taking three arguments:
  * **currentValue**: current element being processed in the array
  * **index (optional)**: index of the current element being processed in the array
  * **array (optional)**: array  `map ` was called upon
* **thisArg (optional)**: value to use as  `this ` when executing  `callback `

## Return value:
A new array with each element being the result of the callback function and flattened to a depth of 1.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `flatMap()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)