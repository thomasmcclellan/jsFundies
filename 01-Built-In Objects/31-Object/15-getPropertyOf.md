##### 5/22/2020
# `Object.getPropertyOf()`

```js
const prototype1 = {},
      object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1); // true
```

---

## Syntax:
`Object.getPrototypeOf(obj)`

* **obj**: The `object` whose prototype is to be returned

## Return value:
The prototype of the given `object`.  If there are no inherited properties, `null` is returned.

---

## Description:
The `Object.getPropertyOf()` method returns the prototype (i.e. the value of the internal `[[Prototype]]` property) of the specified `object`.

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
| `getPrototypeOf()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**5**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**3.5**</span> | **Firefox** || 
| <span style="color: lightgreen">**9**</span> | **IE** || 
| <span style="color: lightgreen">**12.1**</span> | **Opera** || 
| <span style="color: lightgreen">**5**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**12.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**5**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)