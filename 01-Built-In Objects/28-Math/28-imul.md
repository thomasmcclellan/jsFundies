##### 3/11/2020
# `Math.imul()`

```js
console.log(Math.imul(3, 4)); // 12
console.log(Math.imul(-5, 12)); // -60
console.log(Math.imul(0xffffffff, 5)); // -5
console.log(Math.imul(0xfffffffe, 5)); // -10
```

---

## Syntax:
`Math.imul(a, b)`

* **a**: first number
* **b**: second number

## Return value:
The result of the `C`-like 32-bit multiplication of the given arguments.

---

## Description:
The `Math.imul()` method returns the result of the `C`-like 32-bit multiplication of the two parameters.

`Math.imul()` allows for 32-bit integer multiplication with `C`-like semantics.  This feature is useful for projects like [`Emscription`](https://en.wikipedia.org/wiki/Emscripten).  

  > Because `imul()` is a static method of `Math`, you always use it as `Math.imul()`, rather than as a method of `Math` object you created (`Math` is not a constructor).  
  
If you use normal `JS` floating point numbers in `imul`, you will experience a degrade in performance.  This is because of the costly conversion from a floating point to an integer for multiplication, and then converting the multiplied integer back into a floating point.  The reason `imul` exists is because it is faster in only one (so far) circumstance:  `AsmJS`.  `AsmJS` allows for `JIST`-optimizers to more easily implement internal integers in `JS`.  Multiplying two numbers stored internally as integers (which is only possible with `AsmJS`) with `imul` is the only potential circumstance where `Math.imul()` may prove performant in current browsers. 

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `imul()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**28**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**20**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**16**</span> | **Opera** || 
| <span style="color: lightgreen">**7**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**28**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**20**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**15**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**7**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul)