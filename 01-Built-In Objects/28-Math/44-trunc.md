##### 4/02/2020
# `Math.trunc()`

```js
console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(42.84)); // 42
console.log(Math.trunc(0.123)); // 0
console.log(Math.trunc(-0.123)); // -0
```

---

## Syntax:
`Math.trunc(x)`

* **x**: a number

## Return value:
The integer part of the given `number`.

---

## Description:
The `Math.trunc()` method returns the integer part of a number by removing any fractional digits.

Unlike the other three `Math` methods: `Math.floor()`, `Math.ceil()`, and `Math.round()`, the way `Math.trunc()` works is very simple.  It _truncates_ (cuts off) the dot and the digits to the right of it, no mather whether the argument is a positive or negative number.

The argument passed to this method will converted to `number` type implicitly.

  > Because `trunc()` is a static method of `Math`, you always use it as `Math.trunc()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `trunc()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**38**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**25**</span> | **Opera** || 
| <span style="color: lightgreen">**8**</span> | **Safari** || 
| <span style="color: lightgreen">**38**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**38**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**25**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**8**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**3.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)