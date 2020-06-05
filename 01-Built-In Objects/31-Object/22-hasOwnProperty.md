##### 6/03/2020
# `Object.prototype.hasOwnProperty()`

```js
const obj1 = {};
obj1.prop1 = 42;

console.log(obj1.hasOwnProperty('prop1')); // true
console.log(obj1.hasOwnProperty('toString')); // false
console.log(obj1.hasOwnProperty('hasOwnProperty')); // false
```

---

## Syntax:
`obj1.hasOwnProperty(prop)`

* **prop**: The `string` name or `Symbol` of the property to test.

## Return value:
A `boolean` indicating whether or not the `object` has the specified property as own property.

---

## Description:
The `Object.prototype.hasOwnProperty()` method returns a `boolean` indicating whether the `object` has the specified property as its own property (as opposed to inheriting it).

All descendents of `object` inherit the `hasOwnProperty()` method.  this method can be used to determine whether an `object` has the specified property as a direct property of that `object`; unlike the `in` operator, this method does not check for a property in the `object`'s prototype chain.  If an `object` is an `array`, `hasOwnProperty()` can check wether an index exists.

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
| `hasOwnProperty()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**5.5**</span> | **IE** || 
| <span style="color: lightgreen">**5**</span> | **Opera** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)