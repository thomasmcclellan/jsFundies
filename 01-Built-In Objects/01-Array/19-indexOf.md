##### 5/13/2019
# `Array.prototype.indexOf()`

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison')) // 1

//* Starts from index 2
console.log(beasts.indexOf('bison', 2)) // 4

console.log(beasts.indexOf('giraffe')) // -1
```

---

## Syntax:
`arr.indexOf(searchElement[, fromIndex])`

* **searchElement**: element to locate in the array
* **fromIndex (optional)**: index to start the search at.  If the index >= arr.length, -1 is returned, which means the array will not be searched.  If the provided inex value is a negative number, it is taken as the offset from the end of the array.
  * **Note**: if the provided index is negative, the array is still searched from front to back.  If the provied index is 0, then the whole array will be searched.
  * Default is 0 (entire array is searched)

## Return value:
The first index of the element in the array that matches; -1 is not found.

---

  >`indexOf()` compares `searchElement` to elements of the array using strict equality (===).

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
| `indexOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**1.5**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)