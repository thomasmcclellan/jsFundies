##### 5/20/2019
# `Array.prototype.push()`

```js
const animals = ['pigs', 'goats', 'sheep']

console.log(animals.push('cows')) // 4
console.log(animals) // ['pigs', 'goats', 'sheep', 'cows']

animals.push('chickens')

console.log(animals) // ['pigs', 'goats', 'sheep', 'cows', 'chickens']
```

---

## Syntax:
`arr.push(element[, ...[, elementN]])`

* **elementN**: elements to add to the end of the array

## Return value:
The new `length` property of the object upon which the method was called.

---

## Description:
`push` appends values to an array.

`push` is intentionally generic.  This method can be used with `call` or `apply` on objects resembling array.  `push` relies on a `length` property to determine where to start inserting the given values.  If the `length` property cannot be converted into a number, the index used is 0.  This includes the possiblity of `length` being nonexistent, in which case `length` will also be created.

---

  >Although `strings` are native, Array-like objects, they are not suitable in applications of this method, as strings are immutable.  Similarly for native, Array-like object arguments.

---

```js
const sports = ['soccer', 'baseball'];
const total = sports.push('football', 'swimming');

console.log(sports) // ['soccer', 'baseball', 'football', 'swimming']
console.log(total) // 4


const vegetables =  ['parsnip', 'potato'];
const moreVeg = ['celery', 'beetroot'];

//* Mege the second array into the first one
//* Equivalent to vegables.push('celery', 'beetroot')
Array.prototype.push.apply(vegetables, moreVeg)

console.log(vegetables) // ['parsnip', 'potato', 'celery', 'beetroot']
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 3rd Edition | 1999 | Standard | Initial definition. Implemented in JS 1.2 |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `push()` | Browser | Platform |
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)