##### 4/03/2020
# `NaN` Overview

```js
function sanitize(x) {
  if (isNaN(x))
    return NaN;

  return x;
}

console.log(sanitize('1')); // 1
console.log(sanitize('NotANumber')); // NaN
```

---

## Description:
The global `NaN` property is a value representing _Not-A-Number_.

| Property Attributes of `NaN` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

`NaN` is a property of the _global `object`_.

The initial value fo `NaN` is Not-A-Number--the same as the value of `Number.NaN`.  In modern browsers, `NaN` is non-configurable, non-writable property.  Even when this is not the case, avoid overriding it.
It is rather rare to use `NaN` in a program.  It is the returned value when `Math` `functions` fail (`Math.sqrt(-1)`) or when a `function` trying to parse a number fails (`parseInt('blah')`).

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
| `NaN` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**4**</span> | **IE** || 
| <span style="color: lightgreen">**4**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
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

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)