##### 10/02/2019
# `Float64Array` Overview
## Syntax:
### New in `ES2017`:
`new Float64Array()`

### Standard:
`new Float64Array(length)`  
`new Float64Array(typedArray)`  
`new Float64Array(object)`  
`new Float64Array(buffer[, byteOffset[, length]])`

  > For more information about the constructor syntax and parameters, see [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax).

---

## Description:
The `Float64Array` typed array represent an `array` of `64-bit` floating point numbers (corresponding to the `C` `float` data type) in the platform byte order.  If control over byte order is needed, use `DataView` instead.  The contents are initialized to 0.  Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

---

## Properties:
**`Float64Array.BYTES_PER_ELEMENT`**
  > Returns a `number` value of the element size.  4 in the case of a `Float64Array`.

**`Float64Array.length`**
  > Static length property whose value is 3.  For the actual length (number of elements), see `Float64Array.prototype.length`.

**`Float64Array.name`**
  > Returns the `string` value of the constructor name. In the case of the `Float64Array` type: `'Float64Array'`.

**`Float64Array.prototype`**
  > Prototype for the `TypedArray` objects.

## Methods: 
**`Float64Array.from()`**
  > Creates a new `Float64Array` from an array-like or iterable object.  See also `Array.from()`.

**`Float64Array.of()`**
  > Create a new `Float64Array` with a variable number of arguments.  See also `Array.of()`.

## `Float64Array` Prototype:
### Properties:
**`Float64Array.prototype.constructor`**
  > Returns the `function` that created an instance's prototype.  This is the `Float64Array` constructor by default.
  
**`Float64Array.prototype.buffer`** (**Read Only**) 
  > Returns the `ArrayBuffer` referenced by the `Float64Array`.  Fixed at construction time and thus **read only**.
  
**`Float64Array.prototype.byteLength`** (**Read Only**)
  > Returns the length (in bytes) of the `Float64Array` from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.
  
**`Float64Array.prototype.byteOffset`** (**Read Only**)
  > Returns the offset (in bytes) of the `Float64Array` from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.

**`Float64Array.prototype.length`** (**Read Only**)
  > Returns the number of elements hold in the `Float64Array`.  Fixed at construction time and thus **read only**.
  

### Methods:
**`Float64Array.prototype.copyWithin()`**
  > Copies a sequence of array elements within the array.
  
**`Float64Array.prototype.entries()`**
  > Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array.
  
**`Float64Array.prototype.every()`**
  > Tests whether all elements in the array pass the test provided by a `function`.
  
**`Float64Array.prototype.fill()`**
  > Fills all the elements of an array from a start index to an end index with a static value.
  
**`Float64Array.prototype.filter()`**
  > Creates a new array with all of the elements of this array for which the provided filtering function returns `true`.
  
**`Float64Array.prototype.find()`**
  > Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found.
  
**`Float64Array.prototype.findIndex()`**
  > Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 is not found.
  
**`Float64Array.prototype.forEach()`**
  > Calls a function for each element in the array.
  
**`Float64Array.prototype.includes()`**
  > Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate.
  
**`Float64Array.prototype.indexOf()`**
  > Returns the first (least) index of the element within the array equal to the specified value, or -1 is none is found.
  
**`Float64Array.prototype.join()`**
  > Joins all elements of an array into a `string`.
  
**`Float64Array.prototype.keys()`**
  > Returns a new `Array Iterator` that contains the keys for each index in the array.
  
**`Float64Array.prototype.lastIndexOf()`**
  > Returns the last (greatest) index of an element within the array equal to the specified value, or -1 is none is found.
  
**`Float64Array.prototype.map()`**
  > Create a new array with the results of calling a provided `function` on every element in this array. 
  
**`Float64Array.prototype.reduce()`**
  > Apply a function against an accumulator and each value fo the array (from left-to-right) as to reduce it to a simple value.
  
**`Float64Array.prototype.reduceRight()`**
  > Apply a function against an accumulator and each value fo the array (from right-to-left) as to reduce it to a simple value.
  
**`Float64Array.prototype.reverse()`**
  > Reverses the order of the element of an array--the first becomes the last and vice-versa.
  
**`Float64Array.prototype.set()`**
  > Stores multiple values in the typed array, reading input values from a specified array.
  
**`Float64Array.prototype.slice()`**
  > Extracts a section of an array and returns a new array.
  
**`Float64Array.prototype.some()`**
  > Returns `true` if at least one element in this array satisfied the provided testing function.
  
**`Float64Array.prototype.sort()`**
  > Sorts the elements of an array in place and returns the array.
  
**`Float64Array.prototype.subarray()`**
  > Returns a new `Float64Array` from the given start and end element index.
  
**`Float64Array.prototype.values()`**
  > Returns a new `Array Iterator` object that contains the values for each index in the array.
  
**`Float64Array.prototype.toLocaleString()`**
  > Returns a localized `string` representing the array and its elements.
  
**`Float64Array.prototype.toString()`**
  > Returns a `string` representing the array and its elements.
  
**`Float64Array.prototype[@@iterator]()`**
  > Returns a new `Array Iterator` object that contains the values for each index in the array.
  

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an `ECMA` standard.  Specified that `new` is required |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft | `ES2017` changed the `Float64Array` constructor to use the `ToIndex` operation and allows constructors with no arguments |

---

## Browser Compatibility:
| `Float64Array` | Constructor without Arguments | Iterable in Constructor | `Float64Array()` without `new` throws | Browser | Platform |
|---|---|---|---|---|---|
| <span style="color: lightgreen">**7**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**55**</span> | <span style="color: lightgreen">**52**</span> | <span style="color: lightgreen">**44**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | <span style="color: lightgreen">**55**</span> | <span style="color: lightgreen">**52**</span> | <span style="color: lightgreen">**44**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | <span style="color: grey">**?**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.10**</span> | <span style="color: grey">**?**</span> | <span style="color: lightgreen">**4.0.0**</span> | <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)