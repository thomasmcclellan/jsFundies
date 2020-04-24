##### 4/17/2020
# `Number.isFinite()`

```js
console.log(Number.isFinite(1/0)); // false
console.log(Number.isFinite(10/5)); // true
console.log(Number.isFinite(0/0)); // false
```

---

## Syntax:
`Number.isFinite(value)`

* **value**: the value to be tested for finiteness

## Return value:
A `boolean` indicating whether or not the given value is a finite number.

---

## Description:
The `Number.isFinite()` method determines whether the passed value is a finite number.

In comparison to the global `isFinite()` method, this method doesn't forcibly convert the parameter to a `number`.  This means only values of the type `number`, that is also finite` return `true`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `isFinite()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**19**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**16**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**15**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**25**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**16**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**14**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.5**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.10**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)