##### 12/30/2019
# `Map` Overview
## Syntax:
`new Map([iterable])`

* **iterable**: `array` or other [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) `object` whose elements are key-value pairs (i.e. `arrays` with two elements, such as `[[1, 'one'], [2, 'two']]`).  Each key-value pair is added to the new `Map`

---

## Description:
The `Map` `object` holds key-value pairs and remembers the original insertion order of the keys.  Any value (both `objects` and primitive values) may be used as either a key or a value.

A `Map` `object` iterates its elements in insertion order--a `for...of` loop returns an `array` of `[key, value]` for each iteration.

### Key Equity:
  * Key equity is based on the [sameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality) algorithm
  * `NaN` is considered the same as `NaN` (even though `NaN !== NaN`!) and all other values are considered equal according to the semantics of the `===` operator
  * In the current `ECMAScript` specification, -0 and +0 are considered equal, although this was not so in earlier drafts.

### `Objects` and Maps Compared:
`Object` is similar to `Map`--both let you set keys to value, retrieve those values, delete keys, and detect whether something is stored at a key.  Because of this (and because there were no built-in alternatives), `objects` have been used as `Maps` historically.

However, there are important differences that make `Map` preferable in certain cases:
  * The keys of an `object` are `string` and `symbol`, whereas they can be any value for a `Map` (including `functions`, `objects`, or any primitive)
  * The keys in `Map` are ordered, while keys added to `object` are not.  Thus, when iterating over it, a `Map` `object` returns keys in order of insertion
  > **NOTE**: Since the `ECMAScript 2015` spec, `objects` _do_ preserve creation order for `string` and `symbol` keys; so iterating over an `object` with only `string` keys would yield the keys in order of insertion.
  * You can get the size of a `Map` easily with the `size` property, while the number of properties in an `object` must be determined manually
  * A `Map` is an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), so it can be directly iterated.  Iterating over an `object` requires obtaining its keys in some fashion and iterating over them
  * An `object` has a protocol, so there are default keys in the `Map` that could collide with your keys if you're not careful
  > **NOTE**: As of `ES5`, this can be bypassed by using `Object.create(null)`, but this is seldom done.
  * A `Map` may perform better in scenarios involving frequent additions and removals of key-value pairs

---

## Properties:
**`Map.length`**
  > The value of the `length` property is 0.  To count how many entries in a `Map`, use `Map.prototype.size`.

**`get Map[@@species]`**
  > The constructor `function` that is used to create derived `objects`.

**`Map.prototype`**
  > Represents the prototype for the `Map` constructor.  Allows the addition of properties to all `Map` `objects`.

---

## `Map` Instances:
All `Map` instances inherit from `Map.prototype`.

### Properties:
**`Map.prototype.constructor`**
  > Returns the `function` that created an instance's prototype.  This is the `Map` `function` by default.

**`Map.prototype.size`**
  > Returns the number of key/value pairs in the `Map` `object`.

### Methods: 
**`Map.prototype.clear()`**
  > Removes all key/value pairs from the `Map` `object`.

**`Map.prototype.delete()`**
  > Returns `true` if an element in the `Map` `object` existed and has been removed, or `false` if the element does not exist.  `Map.prototype.has()` will return `false` afterwards.

**`Map.prototype.entries()`**
  > Returns a new `Iterator` `object` that contains **an `array` of `[key, value]`** for each element in the `Map` `object` in insertion order.

**`Map.prototype.forEach()`**
  > Calls `callbackFn` once for each key-value pair present in the `Map` object, in insertion order.  If a `thisArg` parameter is provided to `forEach()`, it will be used as the `this` value for each callback. 

**`Map.prototype.get()`**
  > Returns the value associated to the `key`, or `undefined` if there is none.

**`Map.prototype.has()`**
  > Returns a `boolean` asserting whether a value has been associated to the `key` in the `Map` object or not.

**`Map.prototype.keys()`**
  > Returns a new `Iterator` object that contains the **keys** for each element int he `Map` object in insertion order.

**`Map.prototype.set()`**
  > Sets the value for the `key` in the `Map` object.  Returns the `Map` object.

**`Map.prototype.values()`**
  > REturns a new `Iterator` object that contains the **values** for each element in the `Map` object in insertion order.

**`Map.prototype[@@iterator]()`**
  > Returns a new `Iterator` object that contains **an `array` of `[key, value]`** for each element in the `Map` object` in insertion order.

---

## Usage Notes:
**BEWARE**! Setting `object` properties works for `Map` objects as well, and can cause considerable confusion.

Therefore, this still sort of works:

```js
const wrongMap = new Map()
wrongMap['blah'] = 'blaah'
wrongMap['blah2'] = 'blaaaah2'

console.log(wrongMap) // { blah: 'blaah', blah2: 'blaaaah2' }
```

...But, it does not behave as expected:

```js
wrongMap.has('blah') // false
wrongMap.delete('blah') // false

console.log(wrongMap) // { blah: 'blaah', blah2: 'blaaaah2' }
```

And there's very little difference from the correct usage, anyway:

```js
const myMap = new Map()
myMap.set('blah, 'blaah')
myMap.set('blah2, 'blaaaah2')

console.log(myMap) // { 'blah' => 'blaah', 'blah2' => 'blaaaah2' }

myMap.has('blah') // true
myMap.delete('blah') // true

console.log(myMap) // { 'blah2' => 'blaaaah2' }
```

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Map` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**13**</span> | **Firefox** || 
| <span style="color: lightgreen">*11**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**14**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)