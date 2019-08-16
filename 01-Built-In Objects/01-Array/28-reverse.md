##### 5/24/2019
# `Array.prototype.reverse()`

```js
const arr1 = ['one', 'two', 'three']

console.log(arr1) // ['one', 'two', 'three']

const reversed = arr1.reverse()

console.log(reversed) // ['three', 'two', 'one']

// BE AWARE: Existing array mutated
console.log(arr1) // ['three', 'two', 'one']
```

---

## Syntax:
`arr.reverse()`

## Return value:
The reversed array

---

```js
// Reversing the elements in an array-like object
const arrObj = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  length: 3
}

console.log(arrObj) // { 0: 'First', 1: 'Second', 2: 'Third', length: 3 }

Array.prototype.reverse.call(arrObj) //* same syntax for using apply()

console.log(arrObj) // { 0: 'Third', 1: 'Second', 2: 'First', length: 3 }
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
| `reverse()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)