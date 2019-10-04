##### 10/04/2019
# `Function.length`

```js
function func1() { }
function func2(a, b) { }

console.log(func1.length) // 0
console.log(func2.length) // 2
```

---

## Syntax:
``

* ****: 

## Return value:


## Errors Thrown:
<span style="color: red">**RangeError**</span>: 

---

## Description:
The `length` property indicates the number of parameters expected by the `function`.

| Property attributes of `Function.length` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | yes |

`length` is a property of a `function` object, and indicates how many arguments the `function` expects, i.e. the number of formal parameters.  This number excludes the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) and only includes parameters before the first one with a default value.  By contrast, `arguments.length` is local to a `function` and provides the number of arguments actually passed to the function.

### Data Property of the `Function` Constructor:
The `Function` constructor is itself a `Function` object.  Its `length` data property has a value of 1.  The property attributes are listed in the table above.

### Property of the `Function` `Prototype` Object:
The `length` property of the `Function` `prototype` object has a value of 0.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in `JS 1.1` |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard | The `configurable` attribute of this property is now `true` |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `length` | Configurable: `true` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> |<span style="color: grey">**?**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> |<span style="color: lightgreen">**37**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> |<span style="color: lightgreen">**37**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> |<span style="color: grey">**?**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)