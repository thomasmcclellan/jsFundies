##### 5/09/2019
# `Array.prototype.forEach()`

```js
const arr1 = ['a', 'b', 'c']

arr1.forEach(element => console.log(element)) // a b c
```

---

## Syntax:
`arr.forEach(function callback(currentValue[, index [, array]]) {
  your iterator
}[, thisArg])`

* **callback**: function to execute on each element, taking 3 arguments:
  * **currentValue**: current element being processed in the array
  * **index (optional)**: index of the current element being processed
  * **array (optional)**: array `forEach` was called upon
* **thisArg (optional)**: value to use as `this` when executing `callback`

---

## Description:
`forEach` calls a provided `callback` function once for each element in the array in ascending order.  It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).

The range of elements processed by `forEach` is set before the firs invocation of the `callback`.  Elements which are appended to the array after the call to `forEach` begins will not be visited by `callback`.  If existing elements of the array are changed, or deleted, their value is passed to `callback` will be the value at the time `forEach` visits them; elements that are deleted before being visited are not visited.  If elements that are already visited are removed (e.g. using `shift`) during the iteration, later elements will be skipped.

`forEach` executes the `callback` function once for each array element; unlike `map` or `reduce`, it always returns the value `undefined` and is not chainable.  The typical use case is to execute side effects at the end of a chain.

`forEach` does not mutate the array on which it is called (although `callback`, if invoked, may do so).

---

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`)
}

[2, 5, , 9].forEach(logArrayElements) // a[0] = 2 a[1] = 5 a[3] = 9


//* Using `thisArg`
function counter() {
  this.sum = 0
  this.count = 0
}

counter.prototype.add = function(array) {
  array.forEach(entry => {
    this.sum += entry
    ++this.count
  }, this) // <` NOTE
}

const obj = new counter()
obj.add([2, 5, 9])
console.log(obj.count) // 3
console.log(obj.sum) // 16
```

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
| `forEach()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)