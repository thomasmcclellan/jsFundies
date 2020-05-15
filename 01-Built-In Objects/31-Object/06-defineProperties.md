##### 5/11/2020
# `Object.defineProperties()`

```js
const obj1 = {};

Object.defineProperties(obj1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(obj1.property1); // 42
```

---

## Syntax:
`Object.defineProperties(obj, props)`

* **obj**: The `object` on which to define or modify properties
* **props**: An `object` whose keys represent the names of properties to be defined or modified and whose values are `objects` describing those properties.  Each value in `props` must be either a data descriptor or an accessor descriptor; it cannot be both (see `Object.defineProperty()` for more details)
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

## Return value:
The `object` that was passed to the `function`.

---

## Description:
The `Object.defineProperties()` method defines new or modifies existing properties directly on an `object`, returning the `object`.

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
| `defineProperties()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**11.6**</span> | **Opera** || 
| <span style="color: lightgreen">**5**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**5**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)