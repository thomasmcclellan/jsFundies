##### 5/12/2020
# `Object.defineProperty()`

```js
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// Throws an error in strict mode

console.log(object1.property1); // 42
```

---

## Syntax:
`Object.defineProperty(obj, prop, descriptor)`

* **obj**: The `object` on which to define the property
* **prop**: The name or `Symbol` of the property to be defined or modified
* **descriptor**: The descriptor for the property being defined or modified

## Return value:
the `object` that was passed to the `function`.

---

## Description:
The static method, `Object.defineProperty()`, defines a new property directly on an `object`, or modifies an existing property on an `object`, and returns the `object`.

This method allows a precise addition to or modification of a property on an `object`.  Normal property addition through assignment creates properties which show up during property enumeration (`for...in` loop or `Object.keys` method), whose values may be changed, and which may be deleted.  This method allows these extra details to be changed from their defaults.  By default, values added using `Object.defineProperty()` are immutable and not enumerable.

Property descriptors present in `objects` come in two main flavors: data descriptors and accessor descriptors.  A _data descriptor_ is a property that has a value, which may or may not be writable.  An _accessor descriptor_ is a property described by a getter-setter pair of `functions`.  A descriptor must be one of these flavors; it cannot be both.
  * Data descriptors and accessor descriptors may optionally contain the following keys:
    * **configurable**: `true` if and only if the type of this property descriptor must be changed and if the property may be deleted from the corresponding `object` (defaults to `false`)
    * **enumerable**: `true` if an only if this property shows up during enumeration of the properties on the corresponding `object` (defaults to `false`)
  * A data descriptor also has the following optional keys:
    * **value**: The value associated with the property.  Can be any valid `JS` value (`number`, `object`, `function`, etc.)
    * **writable**: `true` if and only if the value associated with the property may be changed with an assignment operator (defaults to `false`)
  * An accessor descriptor also has the following optional keys:
    * **get**: A `function` which serves as a getter for the property, or `undefined` if there is no getter.  The `function`'s return value will be used as the value of the property (defaults to `undefined`)
    * **set**: A `function` which serves as a setter for the property, or `undefined` if there is no setter.  The `function` will receive as its only argument the new value being assigned to the property (defaults to `undefined`)
  * If a descriptor has **neither** of `value` and `writable`, and `get` and `set` keys, it is treated as a data descriptor.  If a descriptor has **both** `value` or `writable`, and `get` or `set` keys, an exception is thrown

Bear in mind that these attributes are not necessarily the descriptor's own properties.  Inherited properties will be considered as well.  In order to ensure these defaults are preserved, you might freeze the `Object.prototype` upfront, specify all options explicitly, or point to `null` with `Object.create(null)`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `defineProperty()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | **Opera** || 
| <span style="color: lightgreen">**5.1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**6**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)