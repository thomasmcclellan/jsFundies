##### 10/30/2019
# `Int16Array` Overview
## Syntax:
`new Int16Array()`  
`new Int16Array(length)`  
`new Int16Array(typedArray)`  
`new Int16Array(object)`  
`new Int16Array(buffer [, byteOffset [, length]])`

  > For more information about the constructor syntax and parameters, see [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax).
---

## Description:
The `Int16Array` typed array represents an `array` of twos-complement 8-bit signed integers.  The contents are initialized to 0.  Once established, you can reference elements in the `array` using the `object`'s methods, or using standard `array` index syntax (that is, using bracket notation).

---

## Properties:
**`Int16Array.BYTES_PER_ELEMENT`**
  > Returns a `number` value of the element size.  4 in the case of a `Int16Array`.

**`Int16Array.length`**
  > Static length property whose value is 3.  For the actual length (number of elements), see `Int16Array.prototype.length`.

**`Int16Array.name`**
  > Returns the `string` value of the constructor name. In the case of the `Int16Array` type: `'Int16Array'`.

**`Int16Array.prototype`**
  > Prototype for the `TypedArray` objects.

## Methods: 
**`Int16Array.from()`**
  > Creates a new `Int16Array` from an array-like or iterable object.  See also `Array.from()`.

**`Int16Array.of()`**
  > Create a new `Int16Array` with a variable number of arguments.  See also `Array.of()`.

## `Int16Array` Prototype:
All `Int16Array` objects inherit from `%TypedArray%.prototype`.

### Properties:
**`Int16Array.prototype.constructor`**
  > Returns the `function` that created an instance's prototype.  This is the `Int16Array` constructor by default.
  
**`Int16Array.prototype.buffer`** (**Read Only**) 
  > Returns the `ArrayBuffer` referenced by the `Int16Array`.  Fixed at construction time and thus **read only**.
  
**`Int16Array.prototype.byteLength`** (**Read Only**)
  > Returns the length (in bytes) of the `Int16Array` from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.
  
**`Int16Array.prototype.byteOffset`** (**Read Only**)
  > Returns the offset (in bytes) of the `Int16Array` from the start of its `ArrayBuffer`.  Fixed at construction time and thus **read only**.

**`Int16Array.prototype.length`** (**Read Only**)
  > Returns the number of elements hold in the `Int16Array`.  Fixed at construction time and thus **read only**.

### Methods:
**`Int16Array.prototype.copyWithin()`**
  > Copies a sequence of array elements within the array.
  
**`Int16Array.prototype.entries()`**
  > Returns a new `Array Iterator` object that contains the key/value pairs for each index in the array.
  
**`Int16Array.prototype.every()`**
  > Tests whether all elements in the array pass the test provided by a `function`.
  
**`Int16Array.prototype.fill()`**
  > Fills all the elements of an array from a start index to an end index with a static value.
  
**`Int16Array.prototype.filter()`**
  > Creates a new array with all of the elements of this array for which the provided filtering function returns `true`.
  
**`Int16Array.prototype.find()`**
  > Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found.
  
**`Int16Array.prototype.findIndex()`**
  > Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 is not found.
  
**`Int16Array.prototype.forEach()`**
  > Calls a function for each element in the array.
  
**`Int16Array.prototype.includes()`**
  > Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate.
  
**`Int16Array.prototype.indexOf()`**
  > Returns the first (least) index of the element within the array equal to the specified value, or -1 is none is found.
  
**`Int16Array.prototype.join()`**
  > Joins all elements of an array into a `string`.
  
**`Int16Array.prototype.keys()`**
  > Returns a new `Array Iterator` that contains the keys for each index in the array.
  
**`Int16Array.prototype.lastIndexOf()`**
  > Returns the last (greatest) index of an element within the array equal to the specified value, or -1 is none is found.
  
**`Int16Array.prototype.map()`**
  > Create a new array with the results of calling a provided `function` on every element in this array. 
  
**`Int16Array.prototype.reduce()`**
  > Apply a function against an accumulator and each value fo the array (from left-to-right) as to reduce it to a simple value.
  
**`Int16Array.prototype.reduceRight()`**
  > Apply a function against an accumulator and each value fo the array (from right-to-left) as to reduce it to a simple value.
  
**`Int16Array.prototype.reverse()`**
  > Reverses the order of the element of an array--the first becomes the last and vice-versa.
  
**`Int16Array.prototype.set()`**
  > Stores multiple values in the typed array, reading input values from a specified array.
  
**`Int16Array.prototype.slice()`**
  > Extracts a section of an array and returns a new array.
  
**`Int16Array.prototype.some()`**
  > Returns `true` if at least one element in this array satisfied the provided testing function.
  
**`Int16Array.prototype.sort()`**
  > Sorts the elements of an array in place and returns the array.
  
**`Int16Array.prototype.subarray()`**
  > Returns a new `Int16Array` from the given start and end element index.
  
**`Int16Array.prototype.values()`**
  > Returns a new `Array Iterator` object that contains the values for each index in the array.
  
**`Int16Array.prototype.toLocaleString()`**
  > Returns a localized `string` representing the array and its elements.
  
**`Int16Array.prototype.toString()`**
  > Returns a `string` representing the array and its elements.
  
**`Int16Array.prototype[@@iterator]()`**
  > Returns a new `Array Iterator` object that contains the values for each index in the array.
  
---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition in an `ECMA` standard.  Specified that `new` is required |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft | `ES2017` changed the `Int16Array` constructor to use the `ToIndex` operation and allows constructors with no arguments. |

---

## Browser Compatibility:
| `Int16Array` | Constructor without arguments | Iterable in constructor | `Int16Array()` without `new` throws | Browser | Platform |
|---|---|---|---|---|---|
| <span style="color: lightgreen">**7**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**39**</span> |<span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: lightgreen">**12**</span> |<span style="color: lightgreen">**14**</span> |<span style="color: lightgreen">**14**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: lightgreen">**55**</span> |<span style="color: lightgreen">**52**</span> |<span style="color: lightgreen">**44**</span> | **Firefox** || 
| <span style="color: lightgreen">**10**</span> |<span style="color: lightgreen">**10**</span> |<span style="color: red">**X**</span> |<span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**26**</span> |<span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**39**</span> |<span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**39**</span> |<span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: lightgreen">**55**</span> |<span style="color: lightgreen">**52**</span> |<span style="color: lightgreen">**44**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**26**</span> |<span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**4.2**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> |<span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**4.0**</span> |<span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.10**</span> |<span style="color: grey">**?**</span> |<span style="color: lightgreen">**4.0.0**</span> |<span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)