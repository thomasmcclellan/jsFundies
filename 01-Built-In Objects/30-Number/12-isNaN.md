##### 4/21/2020
# `Number.isNaN()`

```js
function typeOfNaN(x) {
  if (Number.isNaN(x)) return 'Number NaN';

  if (isNaN(x)) return 'NaN';
}

console.log(typeOfNaN('100F')); // NaN
console.log(typeOfNaN(NaN)); // Number NaN
```

---

## Syntax:
`Number.isNaN(value)`

* **value**: the value to be tested for `NaN` 

## Return value:
Returns `true` if the given value is `NaN` and its type is `Number`; otherwise `false`.

---

## Description:
The `Number.isNaN()` method determines whether the passed value is `NaN` and its type is `Number`.  It is a more robust version of the original, global `isNaN()`.

Due to both equality operators, `==` and `===`, evaluating to `false` when checking if `NaN` is `NaN`, the method `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in `JS`.

In comparison to the global `isNaN()` method, `Number.isNaN()` doesn't suffer the problem of forcefully converting the parameter to a `number`. This means it is now safe to pass values that would normally convert to `NaN`, but aren't actually the same value as `NaN`. This also means that only values of the type `number`, that are also `NaN`, return `true`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `isNaN()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**25**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**15**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**25**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**15**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**14**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.10**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)