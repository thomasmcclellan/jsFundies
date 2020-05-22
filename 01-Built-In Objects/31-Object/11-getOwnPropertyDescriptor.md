##### 5/18/2020
# `Object.getOwnPropertyDescriptor()`

```js
const object1 = {
  property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable); // true
console.log(descriptor1.value); // 42
```

---

## Syntax:
`Object.getOwnPropertyDescriptor(obj, prop)`

* **obj**: The `object` in which to look for the property
* **prop**: The name or `Symbol` of the property whose description is to be retrieved

## Return value:
A property descriptor of the given property if it exists on the `object`, `undefined` otherwise.

---

## Description:
The `Object.getOwnPropertyDescriptor()` method returns a property descriptor for an own property (that is, one directly present on an `object` and not in the `object`'s prototype chain) of a given `object`.

This method permits examination of the precise description of a property.  A property in `JS` consists of either a `string`-valued name or a `Symbol` and a property descriptor.  Further information about property descriptor types and their attributes can be found in `Object.defineProperty()`.

A property descriptor is a record with some of the following attributes:

| Value | Description |
|---|---|
| `value` | The value associated with the property (data descriptors only) |
| `writable` | `true` if and only if the value associated with the property may be changed (data descriptors only) |
| `get` | A `function` which serves as a getter for the property, or `undefined` if there is no getter (accessor descriptors only) |
| `set` | A `function` which serves as a setter for the property, or `undefined` if there is no setter (accessor descriptors only) |
| `configurable` | `true` if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding `object` |
| `enumerable` | `true` if and only if this property shows up during enumeration of the properties on the corresponding `object` |

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
| `getOwnPropertyDescriptor()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**4**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**12**</span> | **Opera** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)