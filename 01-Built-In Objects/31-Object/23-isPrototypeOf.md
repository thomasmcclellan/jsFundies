##### 6/04/2020
# `Object.prototype.isPrototypeOf()`

```js
function object1() { }
function object2() { }

object1.prototype = Object.create(object2.prototype);

const object3 = new object1();

console.log(object1.prototype.isPrototypeOf(object3)); // true
console.log(object2.prototype.isPrototypeOf(object3)); // true
```

---

## Syntax:
`prototypeObj.isPrototypeOf(obj)`

* **obj**: The `object` whose prototype chain will be searched.

## Return value:
A `boolean` indicating whether the calling `object` lies in the prototype chain of the specified `object`.

## Errors Thrown:
<span style="color: red">**TypeError**</span>: A `TypeError` is thrown if `prototypeObj` is `undefined` or `null`

---

## Description:
The `Object.prototype.isPrototypeOf()` method checks if an `object` exists in another `object`'s prototype chain.

  > **NOTE**: `isPrototypeOf()` differs from the `instanceof` operator.  In the expression '`object instanceof AFunction`', the `object` prototype chain is checked against `AFunction.prototype`, not against `AFunction` itself.

The `isPrototypeOf()` method allows you to check whether or not an `object` exists within another `object`'s prototype chain.

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
| `isPrototypeOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)