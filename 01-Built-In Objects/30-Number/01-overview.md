##### 4/06/2020
# `Number` Overview
## Description:
The `Number` `JS` `object` is a wrapper `object` allowing you to work with numerical values.  A `Number` object is created using the `Number() constructor`.  A primitive type `object` `number` is created using the `Number()` `function`.

The `JS` `Number` type is [double-precision 64-bit binary format IEEE 754](https://en.wikipedia.org/wiki/Floating-point_arithmetic) value.  In more recent implementations, `JS` also supports integers with arbitrary precision using the `BigInt` type.

The primary uses of the `Number` object are:
  * If the argument cannot be converted into a number, it returns `NaN`
  * In a non-constructor context (i.e. without the `new` operator), `Number` can be used to perform a type conversion

---

## Constructor:
**`Number()`**
  > Creates a new `Number` object

## Properties:
**`Number.prototype`**
  > Allows the addition of properties to the `Number` object.

**`Number.EPSILON`**
  > The smallest interval between two representable numbers.

**`Number.MAX_SAFE_INTEGER`**
  > The maximum safe integer in `JS` (`2**53 - 1`).

**`Number.MAX_VALUE`**
  > The largest positive representable number.

**`Number.MIN_SAFE_INTEGER`**
  > The minimum safe integer in `JS` (`-(2**53 - 1)`).

**`Number.MIN_VALUE`**
  > The smallest positive representable number--that is, the positive number closest to zero (without actually being zero).

**`Number.NaN`**
  > Special _Not-A-Number_ value.

**`Number.NEGATIVE_INFINITY`**
  > Special value representing negative infinity.  Returned on overflow.

**`Number.POSITIVE_INFINITY`**
  > Special value representing infinity.  Returned on overflow.

## Methods: 
**`Number.isNaN()`**
  > Determines whether the passed value is `NaN`.

**`Number.isFinite()`**
  > Determine whether the passed value is a finite value.

**`Number.isInteger()`**
  > Determines whether the passed value is an integer.

**`Number.isSafeInteger()`**
  > Determines whether the passed value is a safe integer (number between `-(2**53 - 1)` and `2**53 -1`).

**`Number.parseFloat()`**
  > This is the same as the global `parseFloat()` method.

**`Number.parseInt()`**
  > This is the same as the global `parseInt()` method.

---

## Number Instances:
All `Number` instances inherit from `Number.prototype`.  The prototype `object` of the `Number` constructor can be modified to affect all `Number` instances.

## Properties:
**`Number.prototype.constructor`**
  > Returns the `function` that created this `object`'s instance.  By default, this is the `Number` object.

## Methods:
**`Number.prototype.toExponential()`**
  > Returns a `string` representing the `number` in exponential notation.

**`Number.prototype.toFixed()`**
  > Returns a `string` representing the `number` in fixed-point notation.

**`Number.prototype.toLocaleString()`**
  > Returns a `string` with a language sensitive representation of this `number`.  Overrides the `Object.prototype.toLocaleString()` method.

**`Number.prototype.toPrecision()`**
  > REturns a `string` representing the `number` to a specified precision in fixed-point or exponential notation.

**`Number.prototype.toSource()`**
  > Returns an `object` literal representing the specified `Number` object.  You can use this value to create a new `object`.  Overrides the `Object.prototype.toSource()` method.

**`Number.prototype.toString()`**
  > Returns a `string` representing the specified `object` in the specified _radix_ ('base').  Overrides the `Object.prototype.toString()` method.

**`Number.prototype.valueOf()`**
  > Returns the primitive value of the specified `object`.  Overrides the `Object.prototype.valueOf()` method.

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
| `Number` | Browser | Platform |
|---|---|---|---|
| <span style="color: lightgreen">**1**</span> | **Chrome** | Desktop | 
| <span style="color: lightgreen">**12**</span> | **Edge** || 
| <span style="color: lightgreen">**1**</span> | **Firefox** || 
| <span style="color: lightgreen">**3**</span> | **IE** || 
| <span style="color: lightgreen">**3**</span> | **Opera** || 
| <span style="color: lightgreen">**1**</span> | **Safari** || 
| <span style="color: lightgreen">**1**</span> | **Android Webview** | Mobile | 
| <span style="color: lightgreen">**18**</span> | **Chrome for Android** || 
| <span style="color: lightgreen">**4**</span> | **Firefox for Android** || 
| <span style="color: lightgreen">**10.1**</span> | **Opera for Android** || 
| <span style="color: lightgreen">**1**</span> | **Safari on iOS** || 
| <span style="color: lightgreen">**1.0**</span> | **Samsung Internet** || 
| <span style="color: lightgreen">**0.1.100**</span> | **Node.js** | Server | 

<span style="color: lightgreen">Full Support</span>  
<span style="color: grey">Compatibility Unknown</span>  
<span style="color: red">No Support</span>

---

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)