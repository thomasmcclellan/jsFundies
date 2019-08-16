##### 4/22/2019
# `Array.from()`

```js
let from1 = Array.from('foo')
console.log(from1) // ['f', 'o', 'o']

let from2 = Array.from([1, 2, 3], x => x + x)
console.log(from2) // [2, 4, 6]
```

---

## Syntax:
`Array.from(arrayLike[, mapFn[, thisArg]])`

* **arrayLike**: an array-like or iterable object to convert to an array
* **mapFn (optional)**: map function to call on every element of the array
* **thisArg (option)**: value to use as `this` when executing `mapFn`

## Return value:
A new Array instance

---

## Description:
`Array.from()` lets you create Arrays from:
    * Array-like objects(objects with a length property and indexed elements)
    * Iterable objects (objects where you can get its elements, such as `Map` and `Set`)

`Array.from()` has an optional parameter `mapFn`, which allows you to execute a `map` function on each element of the array (or subclass object) that is being created.  

### More clearly:
`Array.from(obj, mapFn, thisArg) = Array.from(obj).map(mapFn, thisArg)`*

The `length` property of the `from()` method is 1.

In ES6, the class syntax allows for sub-classing of both built-in and user defined classes; as a result, static methods such as `Array.from()` are "inherited" by subclasses of Array and create new instances of the subclass, not Array.

##### *The exception is it does not create an intermediate array.  This is especially important for certain array subclasses, like typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `from()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**45**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**32**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**45**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**32**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**4.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)