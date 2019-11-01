##### 10/23/2019
# `Infinity` Overview

```js
const maxNumber = Math.pow(10, 1000)

if (maxNumber === Infinity)
  console.log('Let\'s call that Infinity!') // Let's call that Infinity!

console.log(1 / maxNumber) // 0
```

---

## Description:
The global `Infinity` property is a numeric value representing infinity.

| Property Attributes of `Infinity` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`Infinity` is a property of the _global object_, or in other words, a variable in global scope.

The initial value of `Infinity` is `Number.POSITIVE_INFINITY`.  The value `Infinity` (positive infinity) is greater than any other `number`.  Mathematically, this value behaves the same as infinity; for example, any positive `number` multiplied by `Infinity` equals `Infinity`, and any `number` divided by `Infinity` equals 0.

  > As defined by the `ES5` specification, `Infinity` is read-only (implemented in `JS 1.8.5` / Firefox 4).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript 1st Edition | 1997 | Standard | Initial definition.  Implemented in `JS 1.3` |
| ECMAScript 3rd Edition | 1999 | Standard |  |
| ECMAScript 5.1 | 2011 | Standard |  |
| ECMAScript 2015 (6th Edition) | 2015 | Standard |  |
| ECMAScript 2016 | 2016 | Standard |  |
| ECMAScript Latest Draft | 2019 | Draft |  |

---

## Browser Compatibility:
| `Infinity` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**Yes**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**Yes**</span> | **IE** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**Yes**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**Yes**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)