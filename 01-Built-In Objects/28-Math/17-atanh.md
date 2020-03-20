##### 2/25/2020
# `Math.atanh()`

```js
console.log(Math.atanh(-1)); // -Infinity
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(1)); // Infinity
```

---

## Syntax:
`Math.atanh(x)`

* **x**: a number

## Return value:
The hyperbolic arctangent of the given number.

---

## Description:
The `Math.atanh()` method returns the hyperbolic arctangent of a number, that is:

  > `\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x`

  > Because `atanh()` is a static method of `Math`, you always use it as `Math.atanh()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `atanh()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**Yes**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**Yes**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**Yes**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh)