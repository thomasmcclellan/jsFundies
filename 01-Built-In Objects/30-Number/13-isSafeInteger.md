##### 4/22/2020
# `Number.isSafeInteger()`

```js
function warn(x) {
  if (Number.isSafeInteger(x)) return 'Precision safe.';

  return 'Precision may be lost!';
}

console.log(warn(Math.pow(2, 53))); // Precision may be lost!
console.log(warn(Math.pow(2, 53) - 1)); // Precision safe.
```

---

## Syntax:
`Number.isSafeInteger(testValue)`

* **testValue**: the value to be tested for being a safe integer

## Return value:
A `boolean` indicating whether or not the given value is a `number` that is a safe integer.

---

## Description:
The `Number.isSafeInteger()` method determines whether the provided value is a `number` that is a safe integer.

A safe integer is an integer that:
  * Can be exactly represented as an `IEEE-754` double precision `number`
  * Whose `IEEE-754` representation cannot be the result of rounding any other integer to fit the `IEEE-754` representation

For example, `2**53 - 1` is a safe integer: **it can be exactly represented, and no other integer rounds to it under any `IEEE-754` rounding mode**. In contrast, `2**53` is not a safe integer: **it can be exactly represented in `IEEE-754`**, but the integer `2**53 + 1` can't be directly represented in `IEEE-754` but instead rounds to `2**53` under round-to-nearest and round-to-zero rounding.  The safe integers consist of all integers from `-(2**53 - 1)` inclusive to `2**53 - 1` inclusive (±9,007,199,254,740,991).  

Handling values larger or smaller than ~9 quadrillion with full precision requires using an [arbitrary precision arithmetic library](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic).  See [What Every Programmer Needs to Know about Floating Point Arithmetic](https://floating-point-gui.de/) for more information on floating point representations of numbers.

For larger integers, consider using the `BigInt` type.

---

## Specifications
| Specification | Year | Status | Comment |
|---|---|---|---|
| ECMAScript Latest Draft | 2019 | Draft | Initial definition |

---

## Browser Compatibility:
| `isSafeInteger()` | Browser | Platform |
|---|---|---|
| <span style="color: lightgreen">**34**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**32**</span> | **Firefox** || 
| <span style="color: red">**X**</span> | **IE** || 
| <span style="color: lightgreen">**21**</span> | **Opera** || 
| <span style="color: lightgreen">**10**</span> | **Safari** || 
| <span style="color: lightgreen">**≤37**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**34**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**32**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**21**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**10**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**2.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.12**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)