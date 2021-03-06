##### 4/07/2020
# `Number.EPSILON`

```js
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result); // 2.7755575615628914e-17
console.log(result < Number.EPSILON); // true
```

---

## Description:
The `Number.EPSILON` property represents the difference between 1 and the smallest floating point number greater than 1.

You do not have to create a `Number` object to access this static property (use `Number.EPSILON`).

| Property Attributes of `Number.EPSILON` ||
|---|---|
| Writable | no |
| Enumerable | no |
| Configurable | no |

  > The `EPSILON` property has a value of approximately `2.2204460492503130808472633361816E-16` or `2**-52`.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `EPSILON` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**25**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**9**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**25**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**9**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)