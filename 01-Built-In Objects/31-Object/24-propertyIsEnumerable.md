##### 6/05/2020
# `Object.prototype.propertyIsEnumerable()`

```js
const object1 = {},
      array1 = [];

object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1')); // true
console.log(array1.propertyIsEnumerable(0)); // true
console.log(array1.propertyIsEnumerable('length')); // false
```

---

## Syntax:
`obj.propertyIsEnumerable(prop)`

* **prop**: The name of the property to test.

## Return value:
A `boolean` indicating whether the specified property is enumerable and is the `object`'s own property.

---

## Description:
The `Object.prototype.propertyIsEnumerable()` method returns a `boolean` indicating whether the specified property is enumerable and is the `object`'s own property.

Every object has a `propertyIsEnumerable()` method. This method can determine whether the specified property in an `object` can be enumerated by a `for...in` loop, with the exception of properties inherited through the prototype chain. If the `object` does not have the specified property, this method returns `false`.

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
| `propertyIsEnumerable()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**4**</span> | **Opera** || 
| <span style="color: lightgreen">**3**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)