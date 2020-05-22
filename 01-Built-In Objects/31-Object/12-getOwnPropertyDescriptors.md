##### 5/19/2020
# `Object.getOwnPropertyDescriptors()`

```js
const object1 = {
  property1: 42
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable); // true
console.log(descriptors1.property1.value); // 42
```

---

## Syntax:
`Object.getOwnPropertyDescriptors(obj)`

* **obj**: The `object` for which to get all own property descriptors

## Return value:
An `object` containing all own property descriptors of an `object`.  Might be an empty `object`, if there are no properties.

---

## Description:
The `Object.getOwnPropertyDescriptors()` method returns all own property descriptors of a given `object`.

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
| ECMAScript 2015 (6th Edition) | 2015 | Standard | Initial definition |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `getOwnPropertyDescriptors()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**54**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**15**</span> | **Edge** || 
| <span style="color: lightgreen">**50**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**41**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**54**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**54**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**50**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**41**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**6.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**7.0.0**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)